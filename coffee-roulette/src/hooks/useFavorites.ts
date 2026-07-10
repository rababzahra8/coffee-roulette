import { useState, useEffect, useCallback } from 'react'
import type { Recipe } from '../types'

const STORAGE_KEY = 'coffee-roulette-favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState<Recipe[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const isFavorite = useCallback(
    (id: string) => favorites.some((f) => f.id === id),
    [favorites]
  )

  const toggleFavorite = useCallback((recipe: Recipe) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === recipe.id)
      if (exists) return prev.filter((f) => f.id !== recipe.id)
      return [...prev, recipe]
    })
  }, [])

  return { favorites, isFavorite, toggleFavorite }
}
