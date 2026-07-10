import { motion } from 'framer-motion'
import { Clock, Flame } from 'lucide-react'
import type { Recipe } from '../../types'
import { StrengthBar } from '../ui/StrengthBar'

interface BattleCardProps {
  recipe: Recipe
  side: 'left' | 'right'
  isWinner?: boolean
  isActive: boolean
  onVote?: () => void
  onFlip?: () => void
  showDetails?: boolean
}

export function BattleCard({
  recipe,
  side,
  isWinner,
  isActive,
  onVote,
  showDetails = false,
}: BattleCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40, rotateY: side === 'left' ? -8 : 8 }}
      animate={{
        opacity: isActive ? 1 : 0.5,
        x: 0,
        rotateY: 0,
        scale: isWinner ? 1.03 : isActive ? 1 : 0.95,
      }}
      transition={{ type: 'spring', stiffness: 200 }}
      className={`
        glass rounded-[24px] p-5 shadow-[var(--shadow-card)] flex-1 min-w-0
        ${isWinner ? 'ring-2 ring-caramel shadow-[var(--shadow-glow)]' : ''}
        ${isActive ? 'z-10' : 'z-0'}
      `}
    >
      {isWinner && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center text-sm font-bold text-caramel mb-2"
        >
          🏆 Winner!
        </motion.div>
      )}

      <div className="text-center mb-3">
        <span className="text-4xl">{recipe.emoji}</span>
        <h3 className="font-display text-lg font-bold text-espresso dark:text-cream mt-2 leading-tight">
          {recipe.name}
        </h3>
        <p className="text-xs text-espresso/50 dark:text-cream/50 mt-1 line-clamp-2">
          {recipe.description}
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-3 flex-wrap">
        <span className="text-xs px-2 py-0.5 rounded-full bg-caramel/20 text-espresso/70 dark:text-cream/70">
          {recipe.temperature}
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-caramel/20 text-espresso/70 dark:text-cream/70">
          {recipe.difficulty}
        </span>
      </div>

      {showDetails && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3 text-sm">
          <div>
            <p className="font-medium text-espresso dark:text-cream mb-1">Ingredients</p>
            <ul className="text-espresso/70 dark:text-cream/70 space-y-0.5">
              {recipe.ingredients.map((ing) => (
                <li key={ing}>• {ing}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-espresso dark:text-cream mb-1">Steps</p>
            <ol className="text-espresso/70 dark:text-cream/70 space-y-1 list-decimal list-inside">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="text-xs">{step}</li>
              ))}
            </ol>
          </div>
          {recipe.whyThisWorks && (
            <p className="text-xs italic text-espresso/60 dark:text-cream/60 border-l-2 border-caramel pl-2">
              {recipe.whyThisWorks}
            </p>
          )}
          <div className="flex gap-3 text-xs text-espresso/60 dark:text-cream/60">
            <span className="flex items-center gap-1"><Flame size={12} />{recipe.calories} cal</span>
            <span className="flex items-center gap-1"><Clock size={12} />{recipe.prepTime} min</span>
          </div>
          <StrengthBar value={recipe.strength} label="Strength" color="bg-espresso" />
          <StrengthBar value={recipe.sweetness} label="Sweetness" color="bg-caramel" />
        </motion.div>
      )}

      {onVote && !isWinner && (
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onVote}
          className="w-full mt-4 py-2.5 rounded-xl bg-espresso text-cream text-sm font-semibold cursor-pointer"
        >
          {showDetails ? 'Choose this ☕' : 'Vote for this ☕'}
        </motion.button>
      )}
    </motion.div>
  )
}
