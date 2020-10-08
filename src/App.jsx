import React from 'react';
// import AuthProvider, { AuthContext } from './Auth'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./reset.css"
import Home from "./components/pages/Home"
import Layout from "./components/Layout"



const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
