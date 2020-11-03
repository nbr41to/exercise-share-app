import React, { useEffect } from "react"
import { GlobalStyle } from "../GlobalStyle"
import { useHistory } from "react-router-dom"
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/atoms.js'
import Header from "./Header"
import Top from "./pages/Top"
import Footer from "./Footer"
import Menubar from "./Menubar"
import FloatButton from "./atoms/FloatButton"
import CreateIcon from '@material-ui/icons/Create';

import firebase from "../firebase";

const Layout = ({ children }) => {
  const [user, setUser] = useRecoilState(userState)
  const history = useHistory()

  useEffect(() => {

  }, [])

  const signout = () => {
    firebase.auth().signOut().then(() => {
      setUser(null)
    }).catch(function (error) {
      alert(error)
    });
  }

  return (
    <>
      <GlobalStyle />
      <Header user={user} signout={signout} />
      {
        user ?
          <>
            {children}
            <FloatButton
              value={<CreateIcon />}
              color="orange"
              onClick={() => history.push("/new-post")}
            />
            <Menubar />
          </>
          :
          <>
            <Top user={user} setUser={setUser} />
          </>
      }
      <Footer />
    </>
  )
}


export default Layout