import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  formData: {
    name: '',
    email: '',
    password: '',
    address: '',
    role: 'buyer',
  },
  allowedRoles: [
    {
      key: 'buyer',
      label: 'Buyer',
    },
    {
      key: 'seller',
      label: 'Seller',
    },
  ],
}

export const slice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = action.payload
    },
  },
})

export const { setFormData } = slice.actions

export default slice.reducer
