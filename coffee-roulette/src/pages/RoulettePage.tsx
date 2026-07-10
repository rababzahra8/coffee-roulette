import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CoffeeCup } from '../components/coffee/CoffeeCup'
import { Steam } from '../components/coffee/Steam'
import { BrewingLoader } from '../components/ai/BrewingLoader'
import { useApp } from '../context/AppContext'
import { getRandomRecipe } from '../data/recipes'
import { generateBattleRecipes, AIRecipeError } from '../services/ai'
import { aiRecipeToRecipe } from '../utils/recipeMapper'
import { vibrate } from '../utils/helpers'

export function RoulettePage() {
  const navigate = useNavigate()
  const { selectedIngredients, setCurrentRecipe, setIsSpinning, spinMode, setAiRecipeChoice } = useApp()
  const [phase, setPhase] = useState<'spin' | 'land' | 'brewing' | 'done'>('spin')
  const [flyingChips, setFlyingChips] = useState<string[]>([])
  const [streamText, setStreamText] = useState('')
  const [fallbackNotice, setFallbackNotice] = useState('')

  const isAI = spinMode === 'ai'

  useEffect(() => {
    setIsSpinning(true)
    setFlyingChips(
      selectedIngredients.length > 0 ? selectedIngredients : ['Espresso', 'Milk', 'Sugar']
    )

    if (isAI) {
      setPhase('brewing')
      const messages = [
        'Analyzing your ingredients...',
        'Brewing recipe option A...',
        'Brewing recipe option B...',
        'Balancing flavors...',
      ]
      let i = 0
      const streamTimer = setInterval(() => {
        setStreamText(messages[i % messages.length])
        i++
      }, 1800)

      generateBattleRecipes(selectedIngredients, [])
        .then((response) => {
          clearInterval(streamTimer)
          const recipeA = aiRecipeToRecipe(response.recipeA, 'ai')
          const recipeB = aiRecipeToRecipe(response.recipeB, 'ai')
          setAiRecipeChoice({ recipeA, recipeB, ingredients: selectedIngredients })
          setIsSpinning(false)
          vibrate(100)
          navigate('/ai-choice')
        })
        .catch((err: unknown) => {
          clearInterval(streamTimer)
          const recipeA = getRandomRecipe(selectedIngredients)
          let recipeB = getRandomRecipe(selectedIngredients)
          while (recipeB.id === recipeA.id) {
            recipeB = getRandomRecipe(selectedIngredients)
          }
          const notice =
            err instanceof AIRecipeError
              ? `${err.message} — showing Quick Recipes instead.`
              : 'AI unavailable — here are two Quick Recipes instead!'
          setFallbackNotice(notice)
          setAiRecipeChoice({
            recipeA: { ...recipeA, tags: [...recipeA.tags, 'Quick Fallback'] },
            recipeB: { ...recipeB, tags: [...recipeB.tags, 'Quick Fallback'] },
            ingredients: selectedIngredients,
          })
          setIsSpinning(false)
          vibrate(50)
          setTimeout(() => navigate('/ai-choice'), 1200)
        })

      return () => {
        clearInterval(streamTimer)
        setIsSpinning(false)
      }
    }

    const landTimer = setTimeout(() => {
      setPhase('land')
      vibrate([30, 50, 80])
    }, 2000)

    const doneTimer = setTimeout(() => {
      setPhase('done')
      const recipe = getRandomRecipe(selectedIngredients)
      setCurrentRecipe(recipe)
      setIsSpinning(false)
      vibrate(100)
      navigate('/result')
    }, 2800)

    return () => {
      clearTimeout(landTimer)
      clearTimeout(doneTimer)
      setIsSpinning(false)
    }
  }, [navigate, selectedIngredients, setCurrentRecipe, setIsSpinning, isAI, setAiRecipeChoice])

  if (isAI && phase === 'brewing') {
    return (
      <>
        <BrewingLoader
          streamingText={streamText}
          label="AI is crafting 2 recipes for you"
        />
        {fallbackNotice && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-8 left-0 right-0 text-center text-sm text-espresso/70 dark:text-cream/70 px-6 z-50"
          >
            {fallbackNotice}
          </motion.p>
        )}
      </>
    )
  }

  return (
    <div className="min-h-dvh gradient-warm flex items-center justify-center relative overflow-hidden">
      <motion.div
        animate={{ filter: phase === 'spin' ? 'blur(4px)' : 'blur(0px)' }}
        className="absolute inset-0 opacity-30"
      >
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'linear' }}
          >
            <svg width="20" height="30" viewBox="0 0 16 24" opacity="0.3">
              <ellipse cx="8" cy="12" rx="7" ry="11" fill="#6B3E3A" />
            </svg>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {flyingChips.map((chip, i) => (
          <motion.div
            key={chip}
            initial={{ x: (i % 3 - 1) * 80, y: 100, opacity: 1, scale: 1 }}
            animate={{
              y: -300 - i * 40,
              x: (i % 3 - 1) * 120 + (Math.random() - 0.5) * 60,
              opacity: 0,
              scale: 0.5,
              rotate: Math.random() * 360,
            }}
            transition={{ duration: 1.5, delay: i * 0.08, ease: 'easeOut' }}
            className="absolute z-20 px-3 py-1.5 rounded-full bg-espresso text-cream text-xs font-medium shadow-lg"
          >
            {chip}
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center">
        <Steam className="-top-14" />
        <CoffeeCup size={160} spinning={phase === 'spin'} />
        {phase === 'land' && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-40 h-40 rounded-full bg-caramel/30" />
          </motion.div>
        )}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-8 text-espresso/60 dark:text-cream/60 text-lg font-medium"
        >
          {phase === 'spin' ? 'Spinning...' : 'Landing...'}
        </motion.p>
      </div>
    </div>
  )
}
