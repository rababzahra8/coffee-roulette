import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import type { CachedAIRecipe, BrewBattle } from '../types'

const RECIPE_CACHE_KEY = 'coffee-roulette-ai-cache'
const BATTLE_CACHE_KEY = 'coffee-roulette-battle-cache'
const MAX_CACHED = 50

interface RecipeCacheContextType {
  cachedRecipes: CachedAIRecipe[]
  cacheRecipe: (entry: CachedAIRecipe) => void
  getRecentNames: () => string[]
  battles: BrewBattle[]
  cacheBattle: (battle: BrewBattle) => void
  getBattle: (id: string) => BrewBattle | undefined
  updateBattle: (battle: BrewBattle) => void
}

const RecipeCacheContext = createContext<RecipeCacheContextType | null>(null)

export function RecipeCacheProvider({ children }: { children: ReactNode }) {
  const [cachedRecipes, setCachedRecipes] = useState<CachedAIRecipe[]>(() => {
    try {
      const stored = localStorage.getItem(RECIPE_CACHE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  const [battles, setBattles] = useState<BrewBattle[]>(() => {
    try {
      const stored = localStorage.getItem(BATTLE_CACHE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(RECIPE_CACHE_KEY, JSON.stringify(cachedRecipes))
  }, [cachedRecipes])

  useEffect(() => {
    localStorage.setItem(BATTLE_CACHE_KEY, JSON.stringify(battles))
  }, [battles])

  const cacheRecipe = useCallback((entry: CachedAIRecipe) => {
    setCachedRecipes((prev) =>
      [entry, ...prev.filter((r) => r.recipe.id !== entry.recipe.id)].slice(0, MAX_CACHED)
    )
  }, [])

  const getRecentNames = useCallback(
    () => cachedRecipes.map((r) => r.recipe.name),
    [cachedRecipes]
  )

  const cacheBattle = useCallback((battle: BrewBattle) => {
    setBattles((prev) =>
      [battle, ...prev.filter((b) => b.id !== battle.id)].slice(0, MAX_CACHED)
    )
  }, [])

  const getBattle = useCallback((id: string) => battles.find((b) => b.id === id), [battles])

  const updateBattle = useCallback((battle: BrewBattle) => {
    setBattles((prev) => prev.map((b) => (b.id === battle.id ? battle : b)))
  }, [])

  return (
    <RecipeCacheContext.Provider
      value={{ cachedRecipes, cacheRecipe, getRecentNames, battles, cacheBattle, getBattle, updateBattle }}
    >
      {children}
    </RecipeCacheContext.Provider>
  )
}

export function useRecipeCache() {
  const ctx = useContext(RecipeCacheContext)
  if (!ctx) throw new Error('useRecipeCache must be used within RecipeCacheProvider')
  return ctx
}
