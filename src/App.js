import React from 'react';

import AppLayout from './components/AppLayout';

import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import Login from './pages/Login';

import { Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './css/reset.css';

function App() {
  return (
    <>
      <AppLayout />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/newProduct' component={NewProduct} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </>
  );
}

export default App;