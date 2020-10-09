import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
import firebase from "../../../firebase"
import { AuthContext } from "../../Layout"
import StyledComponent from "./EditProfile.styled"


const EditProfile = (props) => {
  const [user] = useContext(AuthContext);
  const [name, setName] = useState(user.name)
  const [photo, setPhoto] = useState()
  const [photoUrl, setPhotoUrl] = useState(user.photo_url) // 表示用
  const history = useHistory()

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
      setPhotoUrl(URL.createObjectURL(e.target.files[0]))
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (photoUrl !== user.photo_url) {
      firebase.storage().ref(`${user.id}`).child(`${user.photo_name}`).delete()
        .then(() => {
        }).catch((error) => console.log(error))

      firebase.storage().ref(`${user.id}`).child(`${photo.name}`).put(photo)
        .then(() => {
          firebase.storage().ref(`${user.id}`).child(`${photo.name}`).getDownloadURL()
            .then((url) => {
              firebase.firestore().collection("user").doc(user.id).update({
                photo_name: photo.name,
                photo_url: url,
              })
            })
        });
    }
    if (name !== user.name) {
      firebase.firestore().collection("user").doc(user.id).update({
        name: name,
      })
    }
    history.push("/")
  }

  return (
    <StyledComponent>
      <h2>My profile</h2>
      <p>your photo</p>
      {photoUrl && <img src={photoUrl} />}
      <input className="uplord-button" type="file" accept="image/*" onChange={(e) => handleImage(e)} />
      <br />
      <p>your name</p>
      <input className="name-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button className="finish-button" onClick={onSubmit}>変更を適応する</button>
    </StyledComponent >
  );
}

export default EditProfile;