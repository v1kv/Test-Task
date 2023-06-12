import { createAction } from '@reduxjs/toolkit'
import { API_KEY } from '../configs/API'
import { sendRequest } from '../helpers/sendRequest'
export const actionData = createAction('ACTION_DATA')
export const actionLoader = createAction('ACTION_LOADER')
export const actionFullImg = createAction('ACTION_FULL_IMG')

export const actionFetchData = () => (dispatch) => {
  dispatch(actionLoader(true))
  sendRequest(`https://api.unsplash.com/photos/?client_id=${API_KEY}`).then(
    (data) => {
      dispatch(actionLoader(false))
      dispatch(actionData(data))
    },
  )
}
