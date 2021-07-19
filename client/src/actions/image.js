import * as actionTypes from '../constants/actionTypes';
import API from '../api/api'

export const getData = () => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_DATA_LOADING})
    API.getData().then((res) => res.json()).then(
      res => dispatch({type: actionTypes.GET_DATA_SUCCESS, payload: res})
    )
  } catch (err) {
    dispatch({type: actionTypes.GET_DATA_ERROR, payload: err})
  }
}

export const addFavorite = (id) => async dispatch => {
  const value = {image_id : id}
  try {
    API.addFavorite(value).then(
      dispatch({type: actionTypes.ADD_FAVORITE}),
      dispatch(getData())
    )
  } catch (err) {
    dispatch({type: actionTypes.GET_DATA_ERROR, payload: err})
  }
}