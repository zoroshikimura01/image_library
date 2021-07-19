import ImageCard from './ImageCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getData } from '../actions/image';
import { InputWrap, InputContainer, ImageCardContainer } from './styles';

function ImageList() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [filterImage, setFilterImage] = useState([]);
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  const data = useSelector(state => state.images.data)
  const isLoading = useSelector(state => state.images.isLoading)
  const error = useSelector(state => state.images.error)

  useEffect(() => {
    if (data) {
      setFilterImage(
        data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      );
    }
  }, [data, search])

  return (
    <div>
      {isLoading ? <div>Loading</div> :
        <div>{filterImage ?
          <div>
            <InputContainer>
            <InputWrap
              type='text'
              placeholder='Search images...'
              onChange={(e) => setSearch(e.target.value)}
            />
            </InputContainer>
            <ImageCardContainer>
            {filterImage.map((image) => (
              <ImageCard data={image} key={image.id}/>
            ))}
            </ImageCardContainer>
          </div>
          : <div>{error}</div>}</div>}

    </div>
  )
}

export default ImageList
