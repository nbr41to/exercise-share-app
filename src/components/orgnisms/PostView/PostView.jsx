import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../../Layout"
import firebase from "../../../firebase"
import Post from "../../molecules/Post"
import StylePostView from "./PostView.styled"


const PostView = ({ postsData }) => {
    const [user] = useContext(AuthContext)
    // const [posts, setPosts] = useState([])
    const [totalPosts, setTotalPosts] = useState()
    const [totalNice, setTotalNice] = useState()

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

        // firebase.firestore().collection("posts")
        //     .onSnapshot((snapshot) => {
        //         let posts = 0
        //         let nice = 0
        //         snapshot.docs.map((doc) => {
        //             if (doc.data().nice.includes(user.id)) {
        //                 nice++
        //             }
        //             if (doc.data().user_id === user.id) {
        //                 posts++
        //             }
        //         });
        //         setTotalPosts(posts)
        //         setTotalNice(nice)
        //     });
    }, [])

    // console.log(users)
    // console.log(posts)
    return (
        <StylePostView>
            <div>
                {
                    postsData?.sort((a, b) => {
                        if (a.time > b.time) return -1;
                        if (a.time < b.time) return 1;
                        return 0;
                    }).map((post, index) => < Post postData={post} index={index} key={index} />)
                }
            </div>
        </StylePostView>
    );
}

export default PostView;


