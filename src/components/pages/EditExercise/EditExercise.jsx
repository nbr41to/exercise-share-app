import React, { useContext, useState, useEffect } from 'react';
import firebase from "../../../firebase"
import StyledComponent from "./EditExercise.styled"
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/atoms.js'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function EditExercise() {
  const user = useRecoilValue(userState);
  const [newMenu, setNewMenu] = useState("")

  const exerciseAdd = (e) => {
    if (newMenu) {
      firebase.firestore().collection("user").doc(user.id).update({
        exercises: firebase.firestore.FieldValue.arrayUnion(newMenu)
      })
        .then(() => {
          console.log("Document written success");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      setNewMenu("")
    }
  }

  const exerciseDelete = (index) => {
    const key = index
    firebase.firestore().collection("user").doc(user.id).update({
      exercises: firebase.firestore.FieldValue.arrayRemove(user.exercises[index])
    })
      .then(() => {
        console.log("Document deleted success");
      })
      .catch((error) => {
        console.error("Error dalete document: ", error);
      });
  }

  return (
    <StyledComponent>
      <h2>My exercise edit</h2>
      <div className="exercises">
        <ul>
          {user.exercises.map((menu, index) =>
            <li key={index}>
              {menu}
              <button onClick={() => exerciseDelete(index)}>
                <HighlightOffIcon />
              </button>
            </li>
          )}
        </ul>
        <input type="text" value={newMenu} onChange={(e) => setNewMenu(e.target.value)} />
        <button className="add-button" onClick={exerciseAdd}> 追加</button>
      </div>
    </StyledComponent>
  );
}

export default EditExercise;
