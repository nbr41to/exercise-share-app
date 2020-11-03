import React, { useState, useContext, useEffect } from 'react';
import firebase from '../../../firebase'
import StyledComponent from "./Post.styled"
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/atoms.js'

export default function Post({ post, index }) {
    const user = useRecoilValue(userState)
    console.log(post)
    const niceToggle = (id) => {
        const niceRef = firebase.firestore().collection("posts").doc(id)
        niceRef.get().then((doc) => {
            const data = doc.data()
            if (!data.nice.includes(user.id)) {
                niceRef.update({
                    nice: firebase.firestore.FieldValue.arrayUnion(user.id)
                })
                // Good解除機能はポイント加算のため一時消去
                // } else {
                //     niceRef.update({
                //         nice: firebase.firestore.FieldValue.arrayRemove(user.id)
                //     })
            }
        })
            .catch((error) => alert(error))
    }

    const postDelete = (id) => {
        if (window.confirm("投稿を削除しますか？")) {
            firebase.firestore().collection("posts").doc(id).delete()
                .then(() => {
                    console.log("Document successfully deleted!");
                }).catch((error) => {
                    alert(error);
                });
        }
    }

    return (
        <StyledComponent key={index} >
            { post &&
                <>
                    <div className="user-info">
                        <img src={post.photo_url} />
                        <p>{post.user_name}</p>
                    </div>
                    <div className="post-info">
                        <ul>
                            <h2> - MENU - </h2>
                            {post.exercises.map((menu, index) => {
                                return <li key={index}>{menu}</li>
                            })}
                        </ul>
                        <p className="comment">{post.comment}</p>
                        <div>
                            <button
                                className="nice-button"
                                onClick={() => niceToggle(post.post_id)}
                                disabled={(!post.nice.includes(user.id)) ? false : true}
                            >👍 {post.nice.length}</button>
                            <p className="time">{post.time}</p>
                        </div>
                        {(post.user_id === user.id) && <button className="delete" onClick={() => postDelete(post.post_id)}>投稿削除</button>}
                    </div>
                </>
            }
        </StyledComponent>
    )
}

