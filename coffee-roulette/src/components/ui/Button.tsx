import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  icon?: ReactNode
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  icon,
}: ButtonProps) {
  const variants = {
    primary:
      'bg-espresso text-cream hover:bg-espresso-light shadow-lg shadow-espresso/20',
    secondary:
      'bg-cream-dark text-espresso hover:bg-beige border border-beige dark:bg-espresso-light/30 dark:text-cream dark:border-espresso-light/30',
    ghost:
      'bg-transparent text-espresso hover:bg-espresso/5 dark:text-cream dark:hover:bg-cream/5',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-6 py-3 text-base rounded-2xl',
    lg: 'px-8 py-4 text-lg rounded-2xl font-semibold',
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 font-medium
        transition-colors duration-200 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]} ${className}
      `}
    >
      {icon}
      {children}
    </motion.button>
  )
}
