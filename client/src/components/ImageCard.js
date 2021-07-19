import { useDispatch } from "react-redux"
import {addFavorite} from '../actions/image';
import {ImgContainer, AddButton, ImgWrap}from './styles'
const ImageCard = ({data}) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(addFavorite(id))    
  }

  return (
    <ImgContainer>
      <ImgWrap src={data.url} alt={data.name} height={200} width={300}/>
      <AddButton onClick={() => handleClick(data.id)}>ADD TO FAVORITE</AddButton>
    </ImgContainer>
  )
}

export default ImageCard