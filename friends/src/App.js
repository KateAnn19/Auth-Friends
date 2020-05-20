import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import ProtectedRoute from './components/PrivateRoute';

import Login from './components/login';
import FriendsList from './components/FriendsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="links">
      <nav>
        <Link to='/login'>Login</Link>
      </nav>
      <nav>
      <Link to='/friendsList'>Friends</Link>
      </nav>
      </div>
      <Switch>
        <ProtectedRoute exact path='/friendsList' component={FriendsList}/>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
      
    </div>
  );
}

export default App;
