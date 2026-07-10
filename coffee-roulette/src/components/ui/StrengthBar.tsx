import { motion } from 'framer-motion'

interface StrengthBarProps {
  value: number
  max?: number
  label: string
  color?: string
}

export function StrengthBar({ value, max = 5, label, color = 'bg-caramel' }: StrengthBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-espresso/70 dark:text-cream/70">{label}</span>
        <span className="font-medium text-espresso dark:text-cream">{value}/{max}</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: max }, (_, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            className={`h-2 flex-1 rounded-full origin-left ${
              i < value ? color : 'bg-beige/50 dark:bg-espresso-light/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
