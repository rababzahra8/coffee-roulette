import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Swords, RefreshCw, Share2, ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { Navbar } from '../components/layout/Navbar'
import { Button } from '../components/ui/Button'
import { Chip } from '../components/ui/Chip'
import { BrewingLoader } from '../components/ai/BrewingLoader'
import { BattleCard } from '../components/battle/BattleCard'
import { Confetti } from '../components/ai/Confetti'
import { FloatingBeans } from '../components/coffee/FloatingBeans'
import { useApp } from '../context/AppContext'
import { useRecipeCache } from '../context/RecipeCacheContext'
import { useFavorites } from '../hooks/useFavorites'
import { DEFAULT_INGREDIENTS } from '../data/ingredients'
import { generateBattleRecipes, AIRecipeError } from '../services/ai'
import { aiRecipeToRecipe } from '../utils/recipeMapper'
import { decodeBattleShare, shareBattle } from '../utils/battleShare'
import { vibrate } from '../utils/helpers'
import type { BrewBattle } from '../types'

export function BrewBattlePage() {
  const [searchParams] = useSearchParams()
  const { selectedIngredients, toggleIngredient, setCurrentBattle, currentBattle } = useApp()
  const { cacheBattle, getRecentNames, updateBattle } = useRecipeCache()
  const { toggleFavorite } = useFavorites()

  const [loading, setLoading] = useState(false)
  const [streamText, setStreamText] = useState('')
  const [battle, setBattle] = useState<BrewBattle | null>(currentBattle)
  const [activeCard, setActiveCard] = useState<0 | 1>(0)
  const [showDetails, setShowDetails] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const share = searchParams.get('share')
    if (share) {
      const decoded = decodeBattleShare(share)
      if (decoded) {
        setBattle(decoded)
        setCurrentBattle(decoded)
      }
    }
  }, [searchParams, setCurrentBattle])

  const startBattle = useCallback(async () => {
    setLoading(true)
    setError('')
    setShowConfetti(false)
    setShowDetails(false)
    setActiveCard(0)

    const messages = [
      'Pitting flavors against each other...',
      'Brewing contender A...',
      'Brewing contender B...',
      'Preparing the arena...',
    ]
    let i = 0
    const timer = setInterval(() => {
      setStreamText(messages[i % messages.length])
      i++
    }, 1500)

    try {
      const response = await generateBattleRecipes(selectedIngredients, getRecentNames())
      clearInterval(timer)

      const recipeA = aiRecipeToRecipe(response.recipeA, 'battle')
      const recipeB = aiRecipeToRecipe(response.recipeB, 'battle')
      const newBattle: BrewBattle = {
        id: `battle-${Date.now()}`,
        ingredients: selectedIngredients,
        recipeA,
        recipeB,
        createdAt: Date.now(),
      }
      setBattle(newBattle)
      setCurrentBattle(newBattle)
      cacheBattle(newBattle)
      vibrate([50, 30, 80])
    } catch (err) {
      clearInterval(timer)
      setError(
        err instanceof AIRecipeError
          ? err.message
          : 'Could not generate battle. Check VITE_GROQ_API_KEY in .env'
      )
    } finally {
      setLoading(false)
    }
  }, [selectedIngredients, getRecentNames, cacheBattle, setCurrentBattle])

  const handleVote = (winner: 'A' | 'B') => {
    if (!battle) return
    const winnerId = winner === 'A' ? battle.recipeA.id : battle.recipeB.id
    const updated = { ...battle, winnerId }
    setBattle(updated)
    setCurrentBattle(updated)
    updateBattle(updated)
    setShowConfetti(true)
    vibrate([80, 50, 100])
    setTimeout(() => setShowConfetti(false), 3000)
  }

  const handleSave = (recipe: typeof battle extends null ? never : NonNullable<typeof battle>['recipeA']) => {
    toggleFavorite(recipe)
    vibrate(30)
  }

  if (loading) {
    return <BrewingLoader streamingText={streamText} label="AI is preparing Brew Battle" />
  }

  return (
    <div className="min-h-dvh gradient-warm relative">
      <Confetti active={showConfetti} />
      <FloatingBeans count={2} />
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 pt-28 pb-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-2">
            <Swords size={28} className="text-caramel" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-espresso dark:text-cream">
              Brew Battle
            </h1>
          </div>
          <p className="text-espresso/60 dark:text-cream/60 mb-6">
            AI generates two rival recipes from your ingredients. Vote for your champion!
          </p>
        </motion.div>

        {!battle && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {DEFAULT_INGREDIENTS.map((ing) => (
                <Chip
                  key={ing}
                  label={ing}
                  selected={selectedIngredients.includes(ing)}
                  onClick={() => toggleIngredient(ing)}
                />
              ))}
            </motion.div>

            {error && (
              <div className="glass rounded-2xl p-4 mb-4 border-l-4 border-caramel text-sm text-espresso/80 dark:text-cream/80">
                {error}
              </div>
            )}

            <Button
              onClick={startBattle}
              size="lg"
              className="w-full !bg-gradient-to-r !from-espresso !to-caramel !text-cream"
              icon={<Swords size={20} />}
            >
              Start Brew Battle
            </Button>
          </>
        )}

        {battle && (
          <AnimatePresence mode="wait">
            <motion.div key={battle.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="font-display text-2xl font-bold text-caramel"
                >
                  VS
                </motion.span>
              </div>

              {/* Mobile: flip cards */}
              <div className="md:hidden relative mb-4">
                <div className="flex justify-between mb-2">
                  <button
                    onClick={() => setActiveCard(0)}
                    className={`text-xs font-medium px-3 py-1 rounded-full cursor-pointer ${
                      activeCard === 0 ? 'bg-espresso text-cream' : 'bg-beige/50 text-espresso/60'
                    }`}
                  >
                    Recipe A
                  </button>
                  <button
                    onClick={() => setActiveCard(1)}
                    className={`text-xs font-medium px-3 py-1 rounded-full cursor-pointer ${
                      activeCard === 1 ? 'bg-espresso text-cream' : 'bg-beige/50 text-espresso/60'
                    }`}
                  >
                    Recipe B
                  </button>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCard}
                    initial={{ opacity: 0, x: activeCard === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: activeCard === 0 ? 30 : -30 }}
                  >
                    <BattleCard
                      recipe={activeCard === 0 ? battle.recipeA : battle.recipeB}
                      side={activeCard === 0 ? 'left' : 'right'}
                      isActive
                      isWinner={
                        battle.winnerId === (activeCard === 0 ? battle.recipeA.id : battle.recipeB.id)
                      }
                      showDetails={showDetails}
                      onVote={
                        !battle.winnerId
                          ? () => handleVote(activeCard === 0 ? 'A' : 'B')
                          : undefined
                      }
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="flex justify-center gap-4 mt-3">
                  <button
                    onClick={() => setActiveCard(0)}
                    className="p-2 rounded-full glass cursor-pointer"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setActiveCard(1)}
                    className="p-2 rounded-full glass cursor-pointer"
                    aria-label="Next"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Desktop: side by side */}
              <div className="hidden md:flex gap-4 mb-6 items-start">
                <BattleCard
                  recipe={battle.recipeA}
                  side="left"
                  isActive={activeCard === 0}
                  isWinner={battle.winnerId === battle.recipeA.id}
                  showDetails={showDetails}
                  onVote={!battle.winnerId ? () => handleVote('A') : undefined}
                />
                <BattleCard
                  recipe={battle.recipeB}
                  side="right"
                  isActive={activeCard === 1}
                  isWinner={battle.winnerId === battle.recipeB.id}
                  showDetails={showDetails}
                  onVote={!battle.winnerId ? () => handleVote('B') : undefined}
                />
              </div>

              {battle.winnerId && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center mb-6"
                >
                  <p className="font-display text-2xl font-bold text-gradient">🏆 Winner!</p>
                </motion.div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowDetails((d) => !d)}
                >
                  {showDetails ? 'Hide Details' : 'View Details'}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() =>
                    handleSave(
                      battle.winnerId === battle.recipeA.id
                        ? battle.recipeA
                        : battle.winnerId
                          ? battle.recipeB
                          : battle.recipeA
                    )
                  }
                  icon={<Heart size={16} />}
                >
                  Save
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => shareBattle(battle)}
                  icon={<Share2 size={16} />}
                >
                  Share Brew Battle
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setBattle(null)
                    setCurrentBattle(null)
                    startBattle()
                  }}
                  icon={<RefreshCw size={16} />}
                >
                  New Battle
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </main>
    </div>
  )
}
