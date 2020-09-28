import React, { useState, useEffect, useContext } from 'react';
// import AuthProvider, { AuthContext } from './Auth'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./reset.css"
import Home from "./components/pages/Home"
import Layout, { AuthContext } from "./components/Layout"


const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/about' component={About} /> */}
          {/* <Route path='/contact' component={Contact} /> */}
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
