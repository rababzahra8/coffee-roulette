export type Difficulty = 'Easy' | 'Medium' | 'Hard'
export type Temperature = 'Hot' | 'Cold'
export type FilterType = 'all' | 'hot' | 'cold' | 'sweet' | 'strong'
export type SpinMode = 'quick' | 'ai'
export type RecipeSource = 'quick' | 'ai' | 'battle'

export interface Recipe {
  id: string
  name: string
  ingredients: string[]
  instructions: string[]
  calories: number
  strength: number
  sweetness: number
  difficulty: Difficulty
  prepTime: number
  temperature: Temperature
  tags: string[]
  description: string
  emoji: string
  source?: RecipeSource
  whyThisWorks?: string
  optionalAdditions?: string[]
  aiSubstitutions?: string[]
}

export interface Substitution {
  missing: string
  replacement: string
  message: string
}

export interface AIRecipeJSON {
  name: string
  description: string
  prepTime: number
  difficulty: Difficulty
  ingredients: string[]
  steps: string[]
  calories: number
  coffeeStrength: number
  sweetness: number
  temperature: Temperature
  optionalAdditions?: string[]
  substitutions?: string[]
  whyThisWorks?: string
}

export interface AIBattleResponse {
  recipeA: AIRecipeJSON
  recipeB: AIRecipeJSON
}

export interface BrewBattle {
  id: string
  ingredients: string[]
  recipeA: Recipe
  recipeB: Recipe
  winnerId?: string
  createdAt: number
}

export interface AIRecipeChoice {
  recipeA: Recipe
  recipeB: Recipe
  ingredients: string[]
}

export interface CachedAIRecipe {
  recipe: Recipe
  ingredients: string[]
  createdAt: number
}
