import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Navbar } from '../components/layout/Navbar'
import { Chip } from '../components/ui/Chip'
import { Button } from '../components/ui/Button'
import { SpinModeSheet } from '../components/ui/SpinModeSheet'
import { FloatingBeans } from '../components/coffee/FloatingBeans'
import { DEFAULT_INGREDIENTS, ALL_INGREDIENTS } from '../data/ingredients'
import { useApp } from '../context/AppContext'
import { getGreeting } from '../utils/helpers'
import type { SpinMode } from '../types'

export function HomePage() {
  const navigate = useNavigate()
  const { selectedIngredients, toggleIngredient, addIngredient, setSpinMode } = useApp()
  const [search, setSearch] = useState('')
  const [showSpinSheet, setShowSpinSheet] = useState(false)
  const greeting = getGreeting()

  const extraIngredients = ALL_INGREDIENTS.filter(
    (i) => !DEFAULT_INGREDIENTS.includes(i as typeof DEFAULT_INGREDIENTS[number])
  )

  const searchResults = search
    ? ALL_INGREDIENTS.filter(
        (i) =>
          i.toLowerCase().includes(search.toLowerCase()) &&
          !selectedIngredients.includes(i) &&
          !DEFAULT_INGREDIENTS.includes(i as typeof DEFAULT_INGREDIENTS[number])
      )
    : []

  const handleSpinSelect = (mode: SpinMode) => {
    setSpinMode(mode)
    setShowSpinSheet(false)
    navigate('/roulette')
  }

  return (
    <div className="min-h-dvh gradient-warm relative">
      <FloatingBeans count={3} />
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 pt-28 pb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-espresso dark:text-cream mb-2">
            {greeting.text} {greeting.emoji}
          </h1>
          <p className="text-xl text-espresso/60 dark:text-cream/60 mb-10">
            What ingredients do you have today?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-2.5 mb-8"
        >
          {DEFAULT_INGREDIENTS.map((ingredient, i) => (
            <motion.div
              key={ingredient}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * i }}
            >
              <Chip
                label={ingredient}
                selected={selectedIngredients.includes(ingredient)}
                onClick={() => toggleIngredient(ingredient)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative mb-6"
        >
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-espresso/40 dark:text-cream/40"
          />
          <input
            type="text"
            placeholder="Search for more ingredients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl glass text-espresso dark:text-cream placeholder:text-espresso/40 dark:placeholder:text-cream/40 outline-none focus:ring-2 focus:ring-caramel/50 transition-shadow"
          />
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 glass rounded-2xl overflow-hidden z-20 shadow-lg">
              {searchResults.slice(0, 5).map((ingredient) => (
                <button
                  key={ingredient}
                  onClick={() => {
                    addIngredient(ingredient)
                    setSearch('')
                  }}
                  className="w-full px-4 py-3 text-left text-espresso dark:text-cream hover:bg-caramel/10 transition-colors cursor-pointer"
                >
                  + {ingredient}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {selectedIngredients.filter(
          (i) => !DEFAULT_INGREDIENTS.includes(i as typeof DEFAULT_INGREDIENTS[number])
        ).length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {selectedIngredients
              .filter(
                (i) =>
                  !DEFAULT_INGREDIENTS.includes(i as typeof DEFAULT_INGREDIENTS[number])
              )
              .map((ingredient) => (
                <Chip
                  key={ingredient}
                  label={ingredient}
                  selected
                  onClick={() => toggleIngredient(ingredient)}
                />
              ))}
          </motion.div>
        )}

        {extraIngredients.length > 0 && !search && (
          <p className="text-sm text-espresso/40 dark:text-cream/40 mb-4">
            {selectedIngredients.length} ingredient
            {selectedIngredients.length !== 1 ? 's' : ''} selected
          </p>
        )}
      </main>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 p-6 glass z-40"
      >
        <div className="max-w-2xl mx-auto">
          <Button
            onClick={() => setShowSpinSheet(true)}
            size="lg"
            className="w-full !bg-gradient-to-r !from-espresso !to-espresso-light !text-cream"
            icon={<span className="text-xl">🎲</span>}
          >
            Spin the Cup
          </Button>
        </div>
      </motion.div>

      <SpinModeSheet
        open={showSpinSheet}
        onClose={() => setShowSpinSheet(false)}
        onSelect={handleSpinSelect}
      />
    </div>
  )
}
