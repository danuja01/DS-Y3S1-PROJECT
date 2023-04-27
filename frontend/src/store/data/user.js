import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  authUser: {},
}

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthUser(state, action) {
      state.authUser = action.payload
    },
  },
})

export const { setAuthUser } = slice.actions

export const selectAuthUser = createSelector(
  (state) => state.user.authUser,
  (authUser) => authUser,
)

export default slice.reducer
