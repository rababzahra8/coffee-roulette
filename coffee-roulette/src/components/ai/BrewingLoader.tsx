import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CoffeeCup } from '../coffee/CoffeeCup'
import { Steam } from '../coffee/Steam'

const BREWING_MESSAGES = [
  'Grinding fresh beans...',
  'Heating the milk...',
  'Measuring ingredients...',
  'Crafting your recipe...',
  'Balancing flavors...',
  'Adding the finishing touch...',
]

interface BrewingLoaderProps {
  streamingText?: string
  label?: string
}

export function BrewingLoader({ streamingText, label = 'Brewing your recipe' }: BrewingLoaderProps) {
  const [msgIndex, setMsgIndex] = useState(0)
  const [dots, setDots] = useState('')

  useEffect(() => {
    const msgTimer = setInterval(() => {
      setMsgIndex((i) => (i + 1) % BREWING_MESSAGES.length)
    }, 2200)
    const dotTimer = setInterval(() => {
      setDots((d) => (d.length >= 3 ? '' : d + '.'))
    }, 400)
    return () => {
      clearInterval(msgTimer)
      clearInterval(dotTimer)
    }
  }, [])

  return (
    <div className="min-h-dvh gradient-warm flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-caramel/40"
            style={{ left: `${15 + i * 14}%`, top: `${30 + (i % 2) * 40}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 flex flex-col items-center">
        <Steam className="-top-12" />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <CoffeeCup size={140} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-display text-2xl font-semibold text-espresso dark:text-cream mt-8 mb-2"
        >
          {label}
        </motion.h2>

        <motion.p
          key={msgIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-espresso/60 dark:text-cream/60 text-base mb-6"
        >
          {BREWING_MESSAGES[msgIndex]}{dots}
        </motion.p>

        {streamingText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-2xl p-4 max-w-sm text-center"
          >
            <p className="text-sm text-espresso/80 dark:text-cream/80 font-medium">
              {streamingText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="inline-block w-0.5 h-4 bg-caramel ml-1 align-middle"
              />
            </p>
          </motion.div>
        )}

        <div className="flex gap-1.5 mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-caramel"
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
