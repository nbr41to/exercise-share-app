import React, { useState, useEffect, useContext } from 'react';
import firebase from 'firebase'
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState, postsState } from 'recoil/atoms.js'
import StyledComponent from "./Home.styled"
import PostView from "../../orgnisms/PostView"

function Home() {
  const [myData, setMyData] = useState({
    posts: 0,
    nice: 0,
  })
  const [post, setpost] = useState(0)
  const [user, setUser] = useRecoilState(userState)
  const [posts, setPosts] = useRecoilState(postsState)
  // console.log(posts)
  // console.log(user)

  useEffect(() => {
    // timeでソートして20個だけ取得
    firebase.firestore().collection("posts").orderBy("time", "desc").limit(20)
      .onSnapshot((snapshot) => {
        const getPosts = []
        snapshot.docs.map((doc) => {
          const getPost = doc.data()
          getPost.post_id = doc.id
          getPosts.push(getPost)
        })
        setPosts(
          getPosts.map((post, index) => {
            post.user_ref.get().then((doc) => {
              console.log(doc.data())
              getPosts[index] = {
                ...post,
                user_name: doc.data().name,
                photo_url: doc.data().photo_url,
              }
            })
          })
        )
      });
    // 投稿数, NICE数
    firebase.firestore().collection("posts").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        if (doc.data().id === user.id) {
          setMyData({ nice: myData.nice + doc.data().nice.length })
          setMyData({ posts: myData.posts + 1 })
        }
      });
    })
  }, [])

  // useEffect(() => {
  //   // if (!posts === []) {
  //   console.log("get!!!")
  //   posts?.map((post, index) => {
  //     post.user_ref.get().then((doc) => {
  //       console.log(doc.data())
  //       setPosts(posts[index] = {
  //         ...post,
  //         user_name: doc.data().name,
  //         photo_url: doc.data().photo_url,
  //       })
  //     })
  //   })
  //   // }
  // }, [posts])

  console.log(posts)
  return (
    <StyledComponent>
      <h1 className="top-msg">今日も楽しい選択をしよう！</h1>
      <p className="user-info">{user?.name}でログイン中...</p>
      <p className="user-score">投稿数：{myData.posts}<span>｜</span>NICE POINT：{myData.nice}</p>
      {/* <p className="user-score">投稿数：{user.post_total}<span>｜</span>NICE POINT：{user.nice_total}</p> */}
      <PostView />
    </StyledComponent>
  );
}

export default Home;
