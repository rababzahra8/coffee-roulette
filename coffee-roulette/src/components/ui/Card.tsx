import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  glass?: boolean
  delay?: number
}

export function Card({ children, className = '', glass = false, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={`
        rounded-[24px] p-6
        ${glass ? 'glass' : 'bg-white dark:bg-espresso/40'}
        shadow-[var(--shadow-card)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
