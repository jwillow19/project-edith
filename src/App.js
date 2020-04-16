import React from 'react';
import Home from './page/home/Home';
import Shop from './page/shop/Shop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
