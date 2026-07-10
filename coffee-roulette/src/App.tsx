import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { RecipeCacheProvider } from './context/RecipeCacheContext'
import { SplashPage } from './pages/SplashPage'
import { HomePage } from './pages/HomePage'
import { RoulettePage } from './pages/RoulettePage'
import { ResultPage } from './pages/ResultPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { AIChoicePage } from './pages/AIChoicePage'
import { BrewBattlePage } from './pages/BrewBattlePage'

export default function App() {
  return (
    <AppProvider>
      <RecipeCacheProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/roulette" element={<RoulettePage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/ai-choice" element={<AIChoicePage />} />
            <Route path="/brew-battle" element={<BrewBattlePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </RecipeCacheProvider>
    </AppProvider>
  )
}
