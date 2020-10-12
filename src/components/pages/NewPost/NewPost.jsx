import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { AuthContext } from "../../Layout"
import firebase from "../../../firebase"
import StyledComponent from "./NewPost.styled"
import AddCircleIcon from '@material-ui/icons/AddCircle';

function NewPost() {
  const [user] = useContext(AuthContext);
  const [myExercise, setMyExercise] = useState([])
  const [comment, setComment] = useState("")
  const [postExercises, setPostExercises] = useState([])
  const history = useHistory()

  useEffect(() => {
    let getExercises = []
    // ユーザのエクササイズを取得
    const docRef = firebase.firestore().collection("user").doc(user.id)
    docRef.get().then(doc => {
      if (doc.exists) {
        const data = doc.data()
        getExercises = data.exercises
      } else {
        console.log("No such document!");
        // ユーザのDocがなかった場合新規作成する
        firebase.firestore().collection("user").doc(user.id).set({
          exercises: [],
        })
          .then(() => {
            console.log("create new doc");
          })
          .catch((error) => {
            console.error("Error: ", error);
          });
      }
      setMyExercise(getExercises)
    }).catch(function (error) {
      console.log("Error getting document:", error);
    })
  }, [])

  const exerciseSelect = (index) => {
    // const key = index
    setPostExercises([
      ...postExercises,
      myExercise[index]
    ])
  }

  const onSubmit = () => {
    const d = new Date(); // Today
    const DateTimeFormat = 'YYYY/MM/DD hh:mi:ss'; // "2019/10/04 12:34:56" 
    let nowTime = DateTimeFormat
      .replace(/YYYY/g, String(d.getFullYear()))
      .replace(/MM/g, ('0' + (d.getMonth() + 1)).slice(-2))
      .replace(/DD/g, ('0' + d.getDate()).slice(-2))
      .replace(/hh/g, ('0' + d.getHours()).slice(-2))
      .replace(/mi/g, ('0' + d.getMinutes()).slice(-2))
      .replace(/ss/g, ('0' + d.getSeconds()).slice(-2));
    firebase.firestore().collection("posts").add(
      {
        user_id: user.id,
        user_ref: firebase.firestore().collection("user").doc(user.id),
        time: nowTime,
        exercises: postExercises,
        comment: comment,
        nice: [],
      }
    )
      .then(() => {
        alert("新しい投稿が完了しました！")
        history.push("/")
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  return (
    <StyledComponent>
      <div className="exercises">
        <h2>My exercise</h2>
        <p>下から投稿するエクササイズを追加</p>
        <ul>
          {myExercise.map((menu, index) =>
            <li key={index}>
              {menu}
              <button onClick={() => { exerciseSelect(index) }}>
                <AddCircleIcon />
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="new-post">
        <h2>New post</h2>
        <ul>
          <h2> - MENU - </h2>
          {postExercises.map((menu, index) => <li key={index}>{menu}</li>)}
        </ul>
        <input type="text" placeholder="達成感や感想など" onChange={(e) => setComment(e.target.value)} />
        <button className="post-button" onClick={onSubmit}>投稿</button >
      </div>
    </StyledComponent>
  );
}

export default NewPost;
