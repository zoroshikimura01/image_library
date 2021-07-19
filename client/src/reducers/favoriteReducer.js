import * as actionTypes from '../constants/actionTypes'

const initialState = {
  isLoading: false,
  data: null,
  error: ""
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FAVORITE_LOADING: 
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case actionTypes.GET_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      }
    case actionTypes.DELETE_FAVORITE:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state;
  }
}

export default favoriteReducer;