import { motion } from 'framer-motion'
import { Zap, Sparkles } from 'lucide-react'
import { BottomSheet } from './BottomSheet'
import type { SpinMode } from '../../types'

interface SpinModeSheetProps {
  open: boolean
  onClose: () => void
  onSelect: (mode: SpinMode) => void
}

export function SpinModeSheet({ open, onClose, onSelect }: SpinModeSheetProps) {
  return (
    <BottomSheet open={open} onClose={onClose} title="How do you want to brew?">
      <div className="space-y-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('quick')}
          className="w-full text-left glass rounded-[24px] p-5 cursor-pointer border-2 border-transparent hover:border-caramel/40 transition-colors"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-caramel/20 flex items-center justify-center flex-shrink-0">
              <Zap size={24} className="text-caramel" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-espresso dark:text-cream">
                Quick Recipe ⚡
              </h3>
              <p className="text-sm text-espresso/60 dark:text-cream/60 mt-1">
                Curated database · Instant results · Works offline
              </p>
            </div>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('ai')}
          className="w-full text-left glass rounded-[24px] p-5 cursor-pointer border-2 border-transparent hover:border-espresso/30 dark:hover:border-cream/20 transition-colors bg-gradient-to-br from-espresso/5 to-caramel/10"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-espresso/10 dark:bg-cream/10 flex items-center justify-center flex-shrink-0">
              <Sparkles size={24} className="text-espresso dark:text-cream" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-espresso dark:text-cream">
                Ask AI ✨
              </h3>
              <p className="text-sm text-espresso/60 dark:text-cream/60 mt-1">
                Brand-new recipe · Creative names · Flavor science
              </p>
            </div>
          </div>
        </motion.button>
      </div>
    </BottomSheet>
  )
}
