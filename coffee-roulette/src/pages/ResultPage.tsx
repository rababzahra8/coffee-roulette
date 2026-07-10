import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, RefreshCw, Share2, Clock, Flame } from 'lucide-react'
import { Navbar } from '../components/layout/Navbar'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { StrengthBar } from '../components/ui/StrengthBar'
import { useApp } from '../context/AppContext'
import { useFavorites } from '../hooks/useFavorites'
import { getSubstitutionMessages } from '../data/substitutions'
import { shareRecipe, vibrate } from '../utils/helpers'

export function ResultPage() {
  const navigate = useNavigate()
  const { currentRecipe, selectedIngredients } = useApp()
  const { isFavorite, toggleFavorite } = useFavorites()

  if (!currentRecipe) {
    navigate('/home')
    return null
  }

  const substitutions = getSubstitutionMessages(
    currentRecipe.ingredients,
    selectedIngredients
  )
  const saved = isFavorite(currentRecipe.id)

  const handleSave = () => {
    toggleFavorite(currentRecipe)
    vibrate(50)
  }

  const handleShare = async () => {
    await shareRecipe(currentRecipe.name, currentRecipe.description)
    vibrate(30)
  }

  const handleSpinAgain = () => {
    navigate('/roulette')
  }

  return (
    <div className="min-h-dvh gradient-warm relative">
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-8xl mb-4"
          >
            {currentRecipe.emoji}
          </motion.div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-espresso dark:text-cream mb-3">
            {currentRecipe.name}
          </h1>
          <p className="text-espresso/60 dark:text-cream/60 text-lg max-w-md mx-auto">
            {currentRecipe.description}
          </p>

          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            {currentRecipe.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm font-medium bg-caramel/20 text-espresso dark:text-cream"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {substitutions.length > 0 && (
          <Card glass delay={0.1} className="mb-6 !p-4 border-l-4 border-caramel">
            <p className="text-sm font-medium text-espresso dark:text-cream mb-2">
              💡 Smart swaps
            </p>
            {substitutions.map((msg, i) => (
              <p key={i} className="text-sm text-espresso/70 dark:text-cream/70">
                {msg}
              </p>
            ))}
          </Card>
        )}

        <Card delay={0.2} className="mb-6">
          <h2 className="font-display text-xl font-semibold text-espresso dark:text-cream mb-4">
            Ingredients
          </h2>
          <ul className="space-y-2">
            {currentRecipe.ingredients.map((ing) => (
              <li
                key={ing}
                className="flex items-center gap-2 text-espresso/80 dark:text-cream/80"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
                {ing}
              </li>
            ))}
          </ul>
        </Card>

        <Card delay={0.3} className="mb-6">
          <h2 className="font-display text-xl font-semibold text-espresso dark:text-cream mb-4">
            Instructions
          </h2>
          <ol className="space-y-3">
            {currentRecipe.instructions.map((step, i) => (
              <li key={i} className="flex gap-3 text-espresso/80 dark:text-cream/80">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-espresso/10 dark:bg-cream/10 flex items-center justify-center text-sm font-semibold text-espresso dark:text-cream">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </Card>

        <Card delay={0.4} className="mb-8">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 text-espresso/70 dark:text-cream/70">
              <Flame size={18} />
              <span>{currentRecipe.calories} cal</span>
            </div>
            <div className="flex items-center gap-2 text-espresso/70 dark:text-cream/70">
              <Clock size={18} />
              <span>{currentRecipe.prepTime} mins</span>
            </div>
          </div>
          <div className="space-y-4">
            <StrengthBar value={currentRecipe.strength} label="Coffee strength" color="bg-espresso" />
            <StrengthBar value={currentRecipe.sweetness} label="Sweetness" color="bg-caramel" />
          </div>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-3"
        >
          <Button
            variant={saved ? 'primary' : 'secondary'}
            onClick={handleSave}
            className="flex-1"
            icon={<Heart size={18} fill={saved ? 'currentColor' : 'none'} />}
          >
            {saved ? 'Saved' : 'Save'}
          </Button>
          <Button
            variant="secondary"
            onClick={handleSpinAgain}
            className="flex-1"
            icon={<RefreshCw size={18} />}
          >
            Spin Again
          </Button>
          <Button
            variant="secondary"
            onClick={handleShare}
            icon={<Share2 size={18} />}
          >
            Share
          </Button>
        </motion.div>
      </main>
    </div>
  )
}
