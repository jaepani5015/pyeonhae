import React from 'react';

import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import Login from './pages/Login';
import Register from './pages/Register';

import { Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './css/reset.css';

function App() {
  return (
    <Switch>
      <Route exact path='/'><AppLayout /><Home /></Route>
      <Route exact path='/newProduct'><AppLayout /><NewProduct /></Route>
      <Route exact path='/login'><Login /></Route>
      <Route exact path='/register'><Register /></Route>
    </Switch>
  );
}

export default App;