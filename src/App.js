import React from 'react';
import PropTypes from 'prop-types';
import Home from './page/home/Home';
import Shop from './page/shop/Shop';
import Header from './components/header/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { auth } from './firebase/db';
import { createUserProfile } from './firebase/db';
import { Provider } from 'react-redux';
import store from './redux/store';
import { connect } from 'react-redux';
import { setUser } from './redux/actions/user';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  unsubscribeAuth = null;

  componentDidMount() {
    // Destructure in props in class component
    const { setUser } = this.props;

    // open-subscription between App & Firebase
    // auth.onAuthStateChanged triggers and reutnr user obj if authenticated, otherwise returns null
    this.unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      try {
        // on sign-in
        if (userAuth) {
          const userRef = await createUserProfile(userAuth);

          // this line sees if DB has changed by looking at snapshot
          userRef.onSnapshot((snapshot) => {
            setUser({
              id: snapshot.id,
              ...snapshot.data(),
            });
          });
        } else {
          // userAuth = null on Logout, set state to null
          setUser(userAuth);
        }
      } catch (err) {
        console.error(err);
      }
    });
  }

  componentWillUnmount() {
    // close subscription from auth to prevent memory leak
    this.unsubscribeAuth();
  }

  render() {
    const { user } = this.props;

    return (
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route
              path='/login'
              render={() =>
                user.currentUser ? <Redirect to='/' /> : <Login />
              }
            />
            <Route
              path='/register'
              render={() =>
                user.currentUser ? <Redirect to='/' /> : <Register />
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

// NOTE: how you would dispatch without redux-thunk
const mapDispatchToProps = (dispatch) => ({
  // setUsr prop is now
  setUser: (user) => dispatch(setUser(user)),
});

// App.propTypes = {
//   setUser: PropTypes.func.isRequired,
// };
export default connect(mapStateToProps, mapDispatchToProps)(App);
