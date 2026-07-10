import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CoffeeCup } from '../components/coffee/CoffeeCup'
import { Steam } from '../components/coffee/Steam'
import { FloatingBeans } from '../components/coffee/FloatingBeans'

export function SplashPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/home'), 3200)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-dvh gradient-warm flex flex-col items-center justify-center relative overflow-hidden">
      <FloatingBeans count={4} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative mb-6">
          <Steam className="-top-12" />
          <CoffeeCup size={140} />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4"
        >
          Coffee Roulette
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-espresso/70 dark:text-cream/70 text-lg md:text-xl font-light tracking-wide"
        >
          Every coffee starts with a surprise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-12 flex gap-1"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-caramel"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
