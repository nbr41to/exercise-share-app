import React, { useState, useEffect, useContext } from 'react';
import firebase from '../../../firebase'
import { useRecoilState } from 'recoil';
import { userState, postsState } from '../../../recoil/atoms.js'

import StyledComponent from "./Home.styled"

import PostView from "../../orgnisms/PostView"
import { AuthContext } from "../../Layout"


function Home() {
  const [user, setUser] = useRecoilState(userState)
  const [posts, setPosts] = useRecoilState(postsState)
  const [totalPosts, setTotalPosts] = useState()
  const [totalNice, setTotalNice] = useState()
  // const [user] = useContext(AuthContext)
  console.log(user)

  useEffect(() => {
    // timeでソートして20個だけ取得
    // firebase.firestore().collection("posts").orderBy("time", "desc").limit(20)
    //     .onSnapshot((snapshot) => {
    //         let getPosts = snapshot.docs.map((doc) => {
    //             const getPost = doc.data();
    //             getPost.post_id = doc.id
    //             return getPost
    //         });
    //         setPosts(getPosts)
    //     });

    firebase.firestore().collection("posts")
      .onSnapshot((snapshot) => {
        let posts = 0
        let nice = 0
        snapshot.docs.map((doc) => {
          if (doc.data().nice.includes(user.id)) {
            nice++
          }
          if (doc.data().user_id === user.id) {
            posts++
          }
        });
        setTotalPosts(posts)
        setTotalNice(nice)
      });
  }, [])

  // console.log(posts)
  return (
    <StyledComponent>
      <h1 className="top-msg">今日も楽しい選択をしよう！</h1>
      <p className="user-info">{user.name}でログイン中...</p>
      <p className="user-score">投稿数：{totalPosts}<span>｜</span>NICE POINT：{totalNice}</p>
      <PostView posts={posts} />
    </StyledComponent>
  );
}

export default Home;
