import React from 'react';
// import AuthProvider, { AuthContext } from './Auth'
import "./reset.css"
import Home from "./components/pages/Home"
import Layout from "./components/Layout"



const App = () => {

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
