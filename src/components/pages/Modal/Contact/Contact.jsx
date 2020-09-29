import React, { useState, useContext } from 'react';
import { AuthContext } from "../../../Layout"
import firebase from "../../../../firebase"
import StyledComponent from "./Contact.styled"

function NewPost(props) {
  const [user] = useContext(AuthContext);
  const [message, setMessage] = useState("")


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
        time: nowTime,
        message: message
      }
    )
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("運営に問い合わせました。貴重なご意見ありがとうございます！")
        props.closed(false)
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
  return (
    <StyledComponent>
      <div className="modal_box">
        <button className="close-button" onClick={() => { props.closed(false) }}>×</button>
        <div className="form">
          <h2>お問い合わせ</h2>
          <p>ご利用にあたって、不具合・ご意見・ご感想などありましたら、お気軽にお申し付けください。</p>
          <textarea onChange={(e) => setMessage(e.target.value)} ></textarea>
          <button className="submit" onClick={onSubmit}>送信</button >
        </div>
      </div>
    </StyledComponent >
  );
}

export default NewPost;
