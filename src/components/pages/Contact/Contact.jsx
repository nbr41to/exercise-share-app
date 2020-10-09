import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { AuthContext } from "../../Layout"
import firebase from "../../../firebase"
import StyledComponent from "./Contact.styled"

function NewPost() {
  const [user] = useContext(AuthContext);
  const [message, setMessage] = useState("")
  const history = useHistory()


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
    firebase.firestore().collection("form").add(
      {
        user_id: user.id,
        user_name: user.name,
        time: nowTime,
        message: message
      }
    )
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("運営に問い合わせました。貴重なご意見ありがとうございます！")
        history.push("/")
      })
      .catch(function (error) {
        alert(error)
      });
  }
  return (
    <StyledComponent>
      <h2>お問い合わせ</h2>
      <p>ご利用にあたって、不具合・ご意見・ご感想などありましたら、お気軽にお申し付けください。</p>
      <textarea onChange={(e) => setMessage(e.target.value)} ></textarea>
      <button className="submit" onClick={onSubmit}>送信</button >
    </StyledComponent >
  );
}

export default NewPost;
