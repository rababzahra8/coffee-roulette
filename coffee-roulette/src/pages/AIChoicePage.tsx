import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { Navbar } from '../components/layout/Navbar'
import { BattleCard } from '../components/battle/BattleCard'
import { useApp } from '../context/AppContext'
import { useRecipeCache } from '../context/RecipeCacheContext'
import { vibrate } from '../utils/helpers'
import type { Recipe } from '../types'

export function AIChoicePage() {
  const navigate = useNavigate()
  const { aiRecipeChoice, setAiRecipeChoice, setCurrentRecipe } = useApp()
  const { cacheRecipe } = useRecipeCache()
  const [activeCard, setActiveCard] = useState<0 | 1>(0)

  useEffect(() => {
    if (!aiRecipeChoice) navigate('/home')
  }, [aiRecipeChoice, navigate])

  if (!aiRecipeChoice) return null

  const { recipeA, recipeB, ingredients } = aiRecipeChoice

  const handleChoose = (recipe: Recipe) => {
    setCurrentRecipe(recipe)
    cacheRecipe({ recipe, ingredients, createdAt: Date.now() })
    setAiRecipeChoice(null)
    vibrate(80)
    navigate('/result')
  }

  return (
    <div className="min-h-dvh gradient-warm relative">
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles size={24} className="text-caramel" />
            <h1 className="font-display text-3xl font-bold text-espresso dark:text-cream">
              Pick Your Brew
            </h1>
          </div>
          <p className="text-espresso/60 dark:text-cream/60">
            AI crafted two unique recipes — choose your favorite!
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center justify-center mb-6"
        >
          <span className="font-display text-3xl font-bold text-caramel">VS</span>
        </motion.div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex justify-center gap-2 mb-3">
            <button
              onClick={() => setActiveCard(0)}
              className={`text-xs font-medium px-3 py-1 rounded-full cursor-pointer ${
                activeCard === 0 ? 'bg-espresso text-cream' : 'bg-beige/50 text-espresso/60'
              }`}
            >
              Option A
            </button>
            <button
              onClick={() => setActiveCard(1)}
              className={`text-xs font-medium px-3 py-1 rounded-full cursor-pointer ${
                activeCard === 1 ? 'bg-espresso text-cream' : 'bg-beige/50 text-espresso/60'
              }`}
            >
              Option B
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, x: activeCard === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              <BattleCard
                recipe={activeCard === 0 ? recipeA : recipeB}
                side={activeCard === 0 ? 'left' : 'right'}
                isActive
                showDetails
                onVote={() => handleChoose(activeCard === 0 ? recipeA : recipeB)}
              />
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={() => setActiveCard(0)} className="p-2 rounded-full glass cursor-pointer" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => setActiveCard(1)} className="p-2 rounded-full glass cursor-pointer" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex gap-4 items-start">
          <div className="flex-1">
            <BattleCard
              recipe={recipeA}
              side="left"
              isActive
              showDetails
              onVote={() => handleChoose(recipeA)}
            />
          </div>
          <div className="flex-1">
            <BattleCard
              recipe={recipeB}
              side="right"
              isActive
              showDetails
              onVote={() => handleChoose(recipeB)}
            />
          </div>
        </div>

        <p className="text-center text-xs text-espresso/40 dark:text-cream/40 mt-6">
          Tap "Vote for this" to select your recipe
        </p>
      </main>
    </div>
  )
}
