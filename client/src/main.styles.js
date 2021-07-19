import styled from "styled-components";

const NavWrapper = styled.nav`
  background-color:black;
  box-shadow: inset 0px -5px 12px -8px #A31925; 
`
const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
`

const NavUl = styled.ul`
  margin: 0px;
  display: flex;
  padding: 20px;
  margin-bottom: 20px;
`

const NavLink = styled.li`
  padding: 0px 20px 0px 20px;
  a{
    text-decoration: none;
    color: white;
    font-weight: 800;
    :hover{
      color: red;
    }
  }
`

export {
  NavWrapper,
  AppWrapper,
  NavUl,
  NavLink
}