import { motion } from 'framer-motion'

interface FloatingBeansProps {
  count?: number
}

export function FloatingBeans({ count = 6 }: FloatingBeansProps) {
  const beans = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 4,
    size: 12 + Math.random() * 8,
    rotation: Math.random() * 360,
  }))

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {beans.map((bean) => (
        <motion.div
          key={bean.id}
          className="absolute opacity-20 dark:opacity-10"
          style={{ left: `${bean.x}%`, top: '100%' }}
          animate={{
            y: [0, -1200],
            rotate: [bean.rotation, bean.rotation + 360],
            x: [0, Math.sin(bean.id) * 30, Math.cos(bean.id) * -20, 0],
          }}
          transition={{
            duration: bean.duration,
            repeat: Infinity,
            delay: bean.delay,
            ease: 'linear',
          }}
        >
          <svg width={bean.size} height={bean.size * 1.5} viewBox="0 0 16 24">
            <ellipse cx="8" cy="12" rx="7" ry="11" fill="#6B3E3A" />
            <path d="M8 4 C8 12 8 20 8 20" stroke="#4A2C2A" strokeWidth="1" fill="none" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
