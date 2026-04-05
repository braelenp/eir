import { Routes, Route, Navigate } from 'react-router-dom'
import LoadingScreen from './pages/LoadingScreen'
import LandingPage from './pages/LandingPage'
import DappPage from './pages/DappPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoadingScreen />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/dapp" element={<DappPage />} />
      <Route path="/app" element={<Navigate to="/dapp" replace />} />
      <Route path="*" element={<Navigate to="/landing" replace />} />
    </Routes>
  )
}

export default App
