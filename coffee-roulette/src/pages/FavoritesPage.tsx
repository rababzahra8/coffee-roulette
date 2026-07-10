import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Navbar } from '../components/layout/Navbar'
import { Button } from '../components/ui/Button'
import { useFavorites } from '../hooks/useFavorites'
import { useApp } from '../context/AppContext'
import { filterRecipes } from '../data/recipes'
import type { FilterType } from '../types'

const FILTERS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'hot', label: 'Hot' },
  { value: 'cold', label: 'Cold' },
  { value: 'sweet', label: 'Sweet' },
  { value: 'strong', label: 'Strong' },
]

export function FavoritesPage() {
  const navigate = useNavigate()
  const { favorites } = useFavorites()
  const { setCurrentRecipe } = useApp()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<FilterType>('all')

  const filtered = filterRecipes(favorites, search, filter)

  if (favorites.length === 0) {
    return (
      <div className="min-h-dvh gradient-warm relative">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-dvh px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring' }}
            className="text-center"
          >
            <div className="text-8xl mb-6 opacity-40">☕</div>
            <h2 className="font-display text-2xl font-bold text-espresso dark:text-cream mb-3">
              Let's brew your first surprise.
            </h2>
            <p className="text-espresso/60 dark:text-cream/60 mb-8 max-w-sm">
              Save recipes you love and they'll appear here for easy access.
            </p>
            <Button onClick={() => navigate('/home')} size="lg">
              Start Spinning
            </Button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-dvh gradient-warm relative">
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 pt-28 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-bold text-espresso dark:text-cream mb-6"
        >
          Your Favorites
        </motion.h1>

        <div className="relative mb-4">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-espresso/40 dark:text-cream/40"
          />
          <input
            type="text"
            placeholder="Search favorites..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl glass text-espresso dark:text-cream placeholder:text-espresso/40 outline-none focus:ring-2 focus:ring-caramel/50"
          />
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {FILTERS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all cursor-pointer
                ${
                  filter === value
                    ? 'bg-espresso text-cream'
                    : 'bg-white/60 text-espresso/70 hover:bg-white dark:bg-espresso/20 dark:text-cream/70'
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((recipe, i) => (
            <motion.button
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setCurrentRecipe(recipe)
                navigate('/result')
              }}
              className="text-left glass rounded-[24px] p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-shadow cursor-pointer"
            >
              <div className="text-4xl mb-3">{recipe.emoji}</div>
              <h3 className="font-display text-lg font-semibold text-espresso dark:text-cream mb-1">
                {recipe.name}
              </h3>
              <p className="text-sm text-espresso/50 dark:text-cream/50 line-clamp-2 mb-3">
                {recipe.description}
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-caramel/20 text-espresso/70 dark:text-cream/70">
                  {recipe.temperature}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-caramel/20 text-espresso/70 dark:text-cream/70">
                  {recipe.prepTime} mins
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {filtered.length === 0 && favorites.length > 0 && (
          <p className="text-center text-espresso/50 dark:text-cream/50 mt-8">
            No favorites match your search.
          </p>
        )}
      </main>
    </div>
  )
}
