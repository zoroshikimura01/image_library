import * as actionTypes from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  data: null,
  err: ""
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA_LOADING:
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
        err: action.payload.message
      }
    case actionTypes.ADD_FAVORITE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}

export default imageReducer