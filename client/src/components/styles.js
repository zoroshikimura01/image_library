import styled from 'styled-components';

//image card
const ImgContainer = styled.div`
  height: 260px;
  width: 350px;
  background-color: black;
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: 0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925, 5px 5px 15px 5px rgba(0,0,0,0);
`
const ImgWrap = styled.img`
  border-radius: 10px;
`

const AddButton = styled.button`
  margin-top: 10px;
  width: 150px;
  font-weight: 800;
`

//image List
const InputWrap = styled.input`
  height: 45px;
  border-radius: 5px;
  font-size: 20px;
  padding-left: 10px;
  background-color: transparent;
  border: 0px solid;
  border-bottom: 2px solid black;
  :focus{
    outline: none;
  }
`
const InputContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`

const ImageCardContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export {
  ImgContainer,
  AddButton,
  ImgWrap,
  InputWrap,
  InputContainer,
  ImageCardContainer
}