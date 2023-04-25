import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cartSlice'
import data from './data'
import ui from './ui'

export function makeStore() {
  return configureStore({
    devTools: true,
    reducer: {
      cart: cartReducer,
      data,
      ui,
    },
  })
}

const store = makeStore()

export default store
