import { Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'
import { useAuth } from '../hooks'
import Home from '../pages/home'
import NotFound from '../pages/404'
import Cart from '../pages/cart'
import Login from '../pages/login'
import Register from '../pages/register'

const AnimatedRoutes = () => {
  useAuth()

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
