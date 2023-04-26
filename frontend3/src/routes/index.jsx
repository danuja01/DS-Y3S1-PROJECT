import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useAuth } from '../hooks'
import Home from '../pages/home'
import NotFound from '../pages/404'
import Cart from '../pages/cart'

const AnimatedRoutes = () => {
  // useAuth()

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
