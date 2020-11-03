import { useEffect, useCallback } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import firebase, { auth, db } from 'firebase';
import { userState, postsState } from "recoil/atoms"
const FirestoreToRecoil = () => {
  const [user, setUser] = useRecoilState(userState)
  const [posts, setPosts] = useRecoilState(postsState)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid)
        firebase.firestore().collection("user").doc(user.uid).onSnapshot((doc) => {
          setUser(doc.data())
          console.log("logedin: " + doc.data())
        })
      }
    })
  }, [user]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.firestore().collection("posts").orderBy("time", "desc").limit(20)
          .onSnapshot((snapshot) => {
            const getPosts = []
            snapshot.docs.map((doc) => {
              const getPost = doc.data()
              getPost.post_id = doc.id
              getPosts.push(getPost)
            })
          })
        console.log(posts)
      }
    })
  }, [posts]);

  return null;
};

export default FirestoreToRecoil;
