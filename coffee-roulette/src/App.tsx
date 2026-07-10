import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { SplashPage } from './pages/SplashPage'
import { HomePage } from './pages/HomePage'
import { RoulettePage } from './pages/RoulettePage'
import { ResultPage } from './pages/ResultPage'
import { FavoritesPage } from './pages/FavoritesPage'

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/roulette" element={<RoulettePage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
