import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FavoritePage from './pages/FavoritePage';
import HomePage from './pages/HomePage';
import {NavWrapper, AppWrapper, NavUl, NavLink} from './main.styles';

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <NavWrapper>
          <NavUl>
            <NavLink><Link to={'/'}> Home </Link></NavLink>
            <NavLink><Link to={'/favorite'}>Favorite</Link></NavLink>
          </NavUl>
        </NavWrapper>
        {/* <hr /> */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/favorite' component={FavoritePage} />
        </Switch>
      </AppWrapper>
    </Router>
  )
}

export default App;