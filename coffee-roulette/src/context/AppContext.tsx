import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Recipe } from '../types'

interface AppContextType {
  selectedIngredients: string[]
  toggleIngredient: (ingredient: string) => void
  addIngredient: (ingredient: string) => void
  currentRecipe: Recipe | null
  setCurrentRecipe: (recipe: Recipe | null) => void
  isSpinning: boolean
  setIsSpinning: (spinning: boolean) => void
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)

  const toggleIngredient = useCallback((ingredient: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    )
  }, [])

  const addIngredient = useCallback((ingredient: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient) ? prev : [...prev, ingredient]
    )
  }, [])

  return (
    <AppContext.Provider
      value={{
        selectedIngredients,
        toggleIngredient,
        addIngredient,
        currentRecipe,
        setCurrentRecipe,
        isSpinning,
        setIsSpinning,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
