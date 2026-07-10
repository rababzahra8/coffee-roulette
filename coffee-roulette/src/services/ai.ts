import type { AIBattleResponse, AIRecipeJSON } from '../types'
import { buildBattlePrompt, buildSingleRecipePrompt } from './prompts'
import { parseAIJSON } from '../utils/recipeMapper'

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY
const BASE_URL = import.meta.env.VITE_OPENAI_BASE_URL || 'https://api.openai.com/v1'
const MODEL = import.meta.env.VITE_OPENAI_MODEL || 'gpt-4o-mini'

export class AIRecipeError extends Error {
  code: 'NO_API_KEY' | 'API_ERROR' | 'PARSE_ERROR'

  constructor(message: string, code: 'NO_API_KEY' | 'API_ERROR' | 'PARSE_ERROR') {
    super(message)
    this.name = 'AIRecipeError'
    this.code = code
  }
}

export function hasAPIKey(): boolean {
  return Boolean(API_KEY && API_KEY !== 'your_api_key_here')
}

async function callLLM(prompt: string): Promise<string> {
  if (!hasAPIKey()) {
    throw new AIRecipeError(
      'Add your API key to .env as VITE_OPENAI_API_KEY',
      'NO_API_KEY'
    )
  }

  const response = await fetch(`${BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content:
            'You are a world-class barista. Always respond with valid JSON only.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.9,
      response_format: { type: 'json_object' },
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    throw new AIRecipeError(`API error: ${response.status} ${err}`, 'API_ERROR')
  }

  const data = await response.json()
  const content = data.choices?.[0]?.message?.content
  if (!content) throw new AIRecipeError('Empty AI response', 'API_ERROR')
  return content
}

export async function generateAIRecipe(
  ingredients: string[],
  recentNames: string[] = []
): Promise<AIRecipeJSON> {
  try {
    const raw = await callLLM(buildSingleRecipePrompt(ingredients, recentNames))
    return parseAIJSON<AIRecipeJSON>(raw)
  } catch (e) {
    if (e instanceof AIRecipeError) throw e
    throw new AIRecipeError('Failed to parse AI recipe', 'PARSE_ERROR')
  }
}

export async function generateBattleRecipes(
  ingredients: string[],
  recentNames: string[] = []
): Promise<AIBattleResponse> {
  try {
    const raw = await callLLM(buildBattlePrompt(ingredients, recentNames))
    return parseAIJSON<AIBattleResponse>(raw)
  } catch (e) {
    if (e instanceof AIRecipeError) throw e
    throw new AIRecipeError('Failed to parse battle recipes', 'PARSE_ERROR')
  }
}
