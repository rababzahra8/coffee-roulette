import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'

interface BottomSheetProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  title?: string
}

export function BottomSheet({ open, onClose, children, title }: BottomSheetProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 glass rounded-t-[32px] shadow-[var(--shadow-soft)]"
          >
            <div className="w-12 h-1.5 bg-espresso/20 rounded-full mx-auto mt-3 mb-2" />
            {title && (
              <h2 className="font-display text-xl font-semibold text-espresso dark:text-cream text-center px-6 pt-2 pb-4">
                {title}
              </h2>
            )}
            <div className="px-6 pb-8 pt-2 max-w-2xl mx-auto">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
