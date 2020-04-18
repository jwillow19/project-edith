import React from 'react';
import Home from './page/home/Home';
import Shop from './page/shop/Shop';
import Header from './components/header/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './firebase/db';
import { createUserProfile } from './firebase/db';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeAuth = null;

  componentDidMount() {
    // open-subscription between App & Firebase
    // auth.onAuthStateChanged triggers when user is signed in
    this.unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      try {
        // on sign-in
        if (userAuth) {
          const userRef = await createUserProfile(userAuth);

          // this line sees if DB has changed by looking at snapshot
          userRef.onSnapshot((snapshot) => {
            this.setState(
              {
                currentUser: {
                  id: snapshot.id,
                  ...snapshot.data(),
                },
              },
              () => console.log(this.state)
            );
          });
        } else {
          // userAuth = null on Logout, set state to null
          this.setState({ currentUser: null }, () => console.log(this.state));
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
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
