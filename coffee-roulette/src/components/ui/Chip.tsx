import { motion } from 'framer-motion'

interface ChipProps {
  label: string
  selected: boolean
  onClick: () => void
}

export function Chip({ label, selected, onClick }: ChipProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      onClick={onClick}
      layout
      className={`
        px-4 py-2.5 rounded-full text-sm font-medium
        transition-all duration-200 cursor-pointer
        border-2 select-none
        ${
          selected
            ? 'bg-espresso text-cream border-espresso shadow-md shadow-espresso/20'
            : 'bg-white/80 text-espresso border-beige hover:border-caramel dark:bg-espresso/20 dark:text-cream dark:border-espresso-light/30 dark:hover:border-caramel'
        }
      `}
    >
      {selected && <span className="mr-1">✓</span>}
      {label}
    </motion.button>
  )
}
