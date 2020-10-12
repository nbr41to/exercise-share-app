import React, { useState, useEffect } from 'react';
// import AuthProvider, { AuthContext } from './Auth'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./reset.css"
import Home from "./components/pages/Home"
import Info from "./components/pages/Info"
import EditProfile from "./components/pages/EditProfile"
import EditExercise from "./components/pages/EditExercise"
import NewPost from "./components/pages/NewPost"
import Contact from "./components/pages/Contact"
import Layout from "./components/Layout"



const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new-post" component={NewPost} />
          <Route exact path="/edit-exercise" component={EditExercise} />
          <Route exact path="/edit-profile" component={EditProfile} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
