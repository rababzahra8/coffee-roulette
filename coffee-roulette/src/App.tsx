import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { RecipeCacheProvider } from './context/RecipeCacheContext'
import { RootPage } from './components/routing/RootPage'
import { GuardedResultPage, GuardedAIChoicePage, GuardedRoulettePage } from './components/routing/GuardedRoutes'
import { HomePage } from './pages/HomePage'
import { FavoritesPage } from './pages/FavoritesPage'
import { BrewBattlePage } from './pages/BrewBattlePage'

export default function App() {
  return (
    <AppProvider>
      <RecipeCacheProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/roulette" element={<GuardedRoulettePage />} />
            <Route path="/result" element={<GuardedResultPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/ai-choice" element={<GuardedAIChoicePage />} />
            <Route path="/brew-battle" element={<BrewBattlePage />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </BrowserRouter>
      </RecipeCacheProvider>
    </AppProvider>
  )
}
