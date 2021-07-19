import API from '../api/api';
import * as actionTypes from '../constants/actionTypes';

export const getFavorite = () => async dispatch => {
  dispatch({type: actionTypes.GET_FAVORITE_LOADING})
  try {
    API.getFavorite().then((res) => res.json()).then(
      res => dispatch({type: actionTypes.GET_DATA_SUCCESS, payload: res})
    )
  } catch (err) {
    dispatch({type: actionTypes.GET_DATA_ERROR, payload: err})
  }
}

export const deleteFavorite = (id) => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_FAVORITE_LOADING}).then(
      API.deleteFavorite(id).then(
        dispatch({type: actionTypes.DELETE_FAVORITE}),
        dispatch(getFavorite())
      )
    )
  } catch (err) {
    dispatch({type: actionTypes.GET_DATA_ERROR, payload: err})
  }
}