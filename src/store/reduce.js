import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions'

const initialState = {
  data: [],
  loader: true,
  fullImg: '',
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(actions.actionLoader, (state, { payload }) => {
      state.loader = payload
    })
    .addCase(actions.actionData, (state, { payload }) => {
      state.data = payload
    })
  .addCase(actions.actionFullImg, (state, { payload }) => {
      state.fullImg = payload
    })
})
