import React, { useEffect } from 'react';

import Home from './page/home/Home';
import Shop from './page/shop/Shop';
import Checkout from './components/checkout/Checkout';

import Header from './components/header/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/selectors/user.selector';
import { checkUserSession } from './redux/actions/user';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { connect } from 'react-redux';

// JSON DATA
import RB_DATA from './page/shop/rayban-sg';
import SUNGLASSES_DATA from './page/shop/sunglasses';
import EYEGLASSES_DATA from './page/shop/eyeglasses';
import { addDocumentToCollection } from './firebase/db';

import { GlobalStyle } from './global.styles';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
    // addDocumentToCollection('collections', EYEGLASSES_DATA);
  }, [checkUserSession]);

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />

          <Route
            path='/login'
            render={() => (currentUser ? <Redirect to='/' /> : <Login />)}
          />
          <Route
            path='/register'
            render={() => (currentUser ? <Redirect to='/' /> : <Register />)}
          />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// // NOTE: how you would dispatch without redux-thunk
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
