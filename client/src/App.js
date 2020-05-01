import React, { useEffect } from 'react';

import Home from './page/home/Home';
import Shop from './page/shop/Shop';
import Checkout from './components/checkout/Checkout';

import Header from './components/header/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/selectors/user.selector';
import { checkUserSession } from './redux/actions/user';
import './App.css';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // componentDidMount() {
  //   const { checkUserSession } = this.props;
  //   checkUserSession();
  //   // Destructure in props in class component
  //   // open-subscription between App & Firebase
  //   // auth.onAuthStateChanged triggers and reutnr user obj if authenticated, otherwise returns null
  //   // this.unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
  //   //   try {
  //   //     // on sign-in
  //   //     if (userAuth) {
  //   //       const userRef = await createUserProfile(userAuth);
  //   //       // this line sees if DB has changed by looking at snapshot
  //   //       userRef.onSnapshot((snapshot) => {
  //   //         setUser({
  //   //           id: snapshot.id,
  //   //           ...snapshot.data(),
  //   //         });
  //   //       });
  //   //     } else {
  //   //       // userAuth = null on Logout, set state to null
  //   //       setUser(userAuth);
  //   //       // add collections to store - run once and remove
  //   //       // addCollectionAndDocuments(
  //   //       //   'collections',
  //   //       //   collectionsArray.map(({ title, items }) => ({ title, items }))
  //   //       // );
  //   //     }
  //   //   } catch (err) {
  //   //     console.error(err);
  //   //   }
  //   // });
  // }

  // componentWillUnmount() {
  //   // close subscription from auth to prevent memory leak
  //   this.unsubscribeAuth();
  // }

  return (
    <Router>
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
  // setUser: (user) => dispatch(setUser(user)),
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
