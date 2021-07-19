import { useDispatch } from "react-redux";
import { deleteFavorite } from "../actions/favorite";
import {ImgWrap, AddButton, ImgContainer} from './styles'
const FavoriteCard = ({data}) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteFavorite(id))
  }
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {data.map(item =>
        <ImgContainer key={item.id}>
          <ImgWrap src={item.url} alt={item.name} height={200} width={300}/>
          <AddButton onClick={() => handleDelete(item.id)}>DELETE</AddButton>
        </ImgContainer>
      )}
    </div>
  )
}

export default FavoriteCard