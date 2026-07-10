import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Heart, Moon, Sun, Swords } from 'lucide-react'
import { useDarkMode } from '../../hooks/useDarkMode'

export function Navbar() {
  const location = useLocation()
  const { isDark, toggle } = useDarkMode()

  const links = [
    { to: '/home', icon: Home, label: 'Home' },
    { to: '/brew-battle', icon: Swords, label: 'Brew Battle' },
    { to: '/favorites', icon: Heart, label: 'Favorites' },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-2">
          <span className="text-2xl">☕</span>
          <span className="font-display text-xl font-semibold text-gradient">
            Coffee Roulette
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {links.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className={`
                p-2.5 rounded-xl transition-colors
                ${
                  location.pathname === to
                    ? 'bg-espresso/10 text-espresso dark:bg-cream/10 dark:text-cream'
                    : 'text-espresso/60 hover:text-espresso dark:text-cream/60 dark:hover:text-cream'
                }
              `}
              aria-label={label}
            >
              <Icon size={20} />
            </Link>
          ))}
          <button
            onClick={toggle}
            className="p-2.5 rounded-xl text-espresso/60 hover:text-espresso dark:text-cream/60 dark:hover:text-cream transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
