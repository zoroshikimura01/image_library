import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFavorite } from "../actions/favorite";
import FavoriteCard from "./FavoriteCard"
import {ImageCardContainer} from './styles'
const FavoriteList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorite())
  }, [dispatch])
  const data = useSelector(state => state.favorites.data)
  const isLoading = useSelector(state => state.favorites.isLoading)
  const error = useSelector(state => state.favorites.error)

  return (
    <div>
      {isLoading ?<div>Loading</div> : 
      <ImageCardContainer>
        {data ? <FavoriteCard data={data} /> : <div>{error}</div>}
      </ImageCardContainer>
      }
    </div>
  )
}

export default FavoriteList