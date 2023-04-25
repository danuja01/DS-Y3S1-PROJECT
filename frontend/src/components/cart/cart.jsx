// src/components/Cart.jsx

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, updateItemQuantity } from '../../store/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id))
  }

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateItemQuantity({ id, quantity }))
  }

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - {item.price} - Quantity: {item.quantity}
          </p>
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          <input type="number" min="1" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))} />
        </div>
      ))}
    </div>
  )
}

export default Cart
