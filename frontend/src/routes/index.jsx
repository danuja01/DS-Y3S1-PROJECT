import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useAuth } from '../hooks'
import Home from '../pages/home'
import NotFound from '../pages/404'
import Cart from '../components/cart/cart'
import Delivery from '../pages/delivery'
import TestProgress from '../pages/testProgress'
import DispatchDelivery from '../pages/dispatchDelivery'

const AnimatedRoutes = () => {
  // useAuth()

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path='/delivery/testProgress' element={<TestProgress />} />
        <Route path='/delivery/dispatchDelivery' element={<DispatchDelivery />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
