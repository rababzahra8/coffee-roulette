import { motion } from 'framer-motion'

interface SteamProps {
  className?: string
}

export function Steam({ className = '' }: SteamProps) {
  const wisps = [
    { x: -8, delay: 0 },
    { x: 0, delay: 0.3 },
    { x: 8, delay: 0.6 },
  ]

  return (
    <div className={`relative ${className}`}>
      {wisps.map((wisp, i) => (
        <motion.svg
          key={i}
          width="24"
          height="40"
          viewBox="0 0 24 40"
          className="absolute"
          style={{ left: `calc(50% + ${wisp.x}px)`, transform: 'translateX(-50%)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: [0, 0.6, 0.4, 0],
            y: [10, -5, -20, -35],
            x: [0, wisp.x > 0 ? 3 : -3, wisp.x > 0 ? -2 : 2, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: wisp.delay,
            ease: 'easeOut',
          }}
        >
          <path
            d="M12 35 C8 28 16 22 12 15 C8 8 14 4 12 0"
            stroke="#E8D5C4"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />
        </motion.svg>
      ))}
    </div>
  )
}
