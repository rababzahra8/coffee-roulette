export type Difficulty = 'Easy' | 'Medium' | 'Hard'
export type Temperature = 'Hot' | 'Cold'
export type FilterType = 'all' | 'hot' | 'cold' | 'sweet' | 'strong'

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
}

export interface Substitution {
  missing: string
  replacement: string
  message: string
}
