import type { AIRecipeJSON, Difficulty, Recipe, RecipeSource, Temperature } from '../types'

const EMOJIS = ['☕', '🍯', '🧊', '🍫', '🌾', '🍮', '✨', '🌸', '🍂', '💜', '🥤', '⚡']

function pickEmoji(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return EMOJIS[Math.abs(hash) % EMOJIS.length]
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, Math.round(n)))
}

function normalizeDifficulty(d: string): Difficulty {
  if (d === 'Medium' || d === 'Hard') return d
  return 'Easy'
}

function normalizeTemperature(t: string): Temperature {
  return t === 'Cold' ? 'Cold' : 'Hot'
}

export function aiRecipeToRecipe(
  ai: AIRecipeJSON,
  source: RecipeSource = 'ai',
  id?: string
): Recipe {
  const name = ai.name || 'Mystery Brew'
  return {
    id: id || `ai-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    description: ai.description || 'A unique AI-crafted coffee experience.',
    ingredients: ai.ingredients || [],
    instructions: ai.steps || [],
    calories: clamp(ai.calories || 120, 5, 500),
    strength: clamp(ai.coffeeStrength ?? 3, 0, 5),
    sweetness: clamp(ai.sweetness ?? 3, 0, 5),
    difficulty: normalizeDifficulty(ai.difficulty),
    prepTime: clamp(ai.prepTime || 5, 1, 10),
    temperature: normalizeTemperature(ai.temperature),
    tags: [
      ai.difficulty || 'Easy',
      `${clamp(ai.prepTime || 5, 1, 10)} mins`,
      normalizeTemperature(ai.temperature),
      source === 'battle' ? 'Brew Battle' : 'AI Crafted',
    ],
    emoji: pickEmoji(name),
    source,
    whyThisWorks: ai.whyThisWorks,
    optionalAdditions: ai.optionalAdditions,
    aiSubstitutions: ai.substitutions,
  }
}

export function parseAIJSON<T>(raw: string): T {
  const cleaned = raw
    .replace(/```json\s*/gi, '')
    .replace(/```\s*/g, '')
    .trim()
  const start = cleaned.indexOf('{')
  const end = cleaned.lastIndexOf('}')
  if (start === -1 || end === -1) throw new Error('No JSON found in AI response')
  return JSON.parse(cleaned.slice(start, end + 1)) as T
}
