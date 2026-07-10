import { motion } from 'framer-motion'

interface CoffeeCupProps {
  size?: number
  spinning?: boolean
  className?: string
}

export function CoffeeCup({ size = 120, spinning = false, className = '' }: CoffeeCupProps) {
  return (
    <motion.div
      className={className}
      animate={spinning ? { rotate: [0, 360, 720, 1080], scale: [1, 1.1, 0.95, 1] } : {}}
      transition={spinning ? { duration: 2, ease: 'easeInOut' } : {}}
    >
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
        <ellipse cx="60" cy="105" rx="35" ry="6" fill="#4A2C2A" opacity="0.15" />
        <path
          d="M25 45 C25 35 35 30 60 30 C85 30 95 35 95 45 L95 80 C95 92 82 100 60 100 C38 100 25 92 25 80 Z"
          fill="url(#cupGradient)"
          stroke="#4A2C2A"
          strokeWidth="2"
        />
        <path
          d="M95 50 C105 50 110 55 110 62 C110 69 105 74 95 74"
          stroke="#4A2C2A"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="60" cy="45" rx="32" ry="8" fill="#6B3E3A" opacity="0.6" />
        <ellipse cx="60" cy="42" rx="28" ry="5" fill="#4A2C2A" opacity="0.8" />
        <defs>
          <linearGradient id="cupGradient" x1="25" y1="30" x2="95" y2="100">
            <stop offset="0%" stopColor="#F5E6D3" />
            <stop offset="100%" stopColor="#E8D5C4" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
