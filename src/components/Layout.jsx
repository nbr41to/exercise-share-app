import React, { useState, useEffect } from "react"
import { GlobalStyle } from "../GlobalStyle"
import { useHistory } from "react-router-dom"
import { useRecoilState } from 'recoil';
import { userState, postsState } from '../recoil/atoms.js'
import Header from "./Header"
import Top from "./pages/Top"
import Footer from "./Footer"
import Menubar from "./Menubar"
import FloatButton from "./atoms/FloatButton"
import CreateIcon from '@material-ui/icons/Create';

import firebase from "../firebase";

export const AuthContext = React.createContext([null, () => { }]);

const Layout = ({ children }) => {
  const [user, setUser] = useRecoilState(userState)
  const [posts, setPosts] = useRecoilState(postsState)
  // const [user, setUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.firestore().collection("user").doc(user.uid).get().then((doc) => {
          setUser(doc.data())
        })
      }
    })
  }, [])

  useEffect(() => {
    // timeでソートして20個だけ取得
    // firebase.firestore().collection("posts").orderBy("time", "desc").limit(20)
    //   .onSnapshot((snapshot) => {
    //     let getPosts = snapshot.docs.map((doc) => {
    //       const getPost = doc.data();
    //       getPost.post_id = doc.id
    //       return getPost
    //     });
    //     setPosts(getPosts)
    //   });
  }, [])

  const signout = () => {
    firebase.auth().signOut().then(() => {
      setUser(null)
    }).catch(function (error) {
      alert(error)
    });
  }

  // console.log(user)
  // console.log(firebase.auth().currentUser)
  return (
    <AuthContext.Provider
      value={[user, setUser]}
    >
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
    </AuthContext.Provider>
  )
}


export default Layout