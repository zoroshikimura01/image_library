import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import imageReducer from './imageReducer'
const rootReducer = combineReducers({
  images: imageReducer,
  favorites: favoriteReducer
});

export default rootReducer;