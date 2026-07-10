import { Navigate } from 'react-router-dom'
import { SplashPage } from '../../pages/SplashPage'

const SPLASH_KEY = 'coffee-roulette:splash-seen'

export function markSplashSeen() {
  sessionStorage.setItem(SPLASH_KEY, '1')
}

/** Splash on first visit; skip on return visits and invalid deep links. */
export function RootPage() {
  if (sessionStorage.getItem(SPLASH_KEY)) {
    return <Navigate to="/home" replace />
  }
  return <SplashPage />
}
