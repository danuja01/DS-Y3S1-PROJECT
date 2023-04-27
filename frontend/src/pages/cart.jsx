import CartCard from '../components/cart/cartCard'
import Layout from '../components/layout'
import { useAuth } from '../hooks'

const Cart = (props) => {
  return (
    <Layout>
      <CartCard />
    </Layout>
  )
}

export default Cart
