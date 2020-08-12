import React from 'react';

import AppLayout from './components/AppLayout';
import Home from './pages/Home';

import { Switch, Route, Link } from 'react-router-dom';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './css/reset.css';

function App() {
  return (
    <>
      <AppLayout />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  );
}

export default App;
