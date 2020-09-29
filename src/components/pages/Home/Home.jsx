import React, { useState, useContext } from 'react';
import StyledComponent from "./Home.styled"

import NewPost from "../Modal/NewPost"
import EditExercise from "../Modal/EditExercise"
import EditProfile from "../Modal/EditProfile"
import Contact from "../Modal/Contact"
import PostView from "../../orgnisms/PostView"
import { AuthContext } from "../../Layout"

import CreateIcon from '@material-ui/icons/Create';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

function Home() {
  const [openNew, setOpenNew] = useState(false);
  const [openExercise, setOpenExercise] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [user] = useContext(AuthContext)

  // console.log(user)
  return (
    <StyledComponent>
      {openNew && <NewPost closed={setOpenNew} />}
      {openExercise && <EditExercise closed={setOpenExercise} />}
      {openProfile && <EditProfile closed={setOpenProfile} />}
      {openContact && <Contact closed={setOpenContact} />}
      <h1 className="top-msg">今日も楽しい選択をしよう！</h1>
      <p className="user-info">{user.name}でログイン中...</p>
      <div className="user-menu">
        <button onClick={() => { setOpenNew(true) }}>
          <CreateIcon />
        </button>
        <button onClick={() => { setOpenExercise(true) }}>
          <DirectionsRunIcon />
        </button>
        <button onClick={() => { setOpenProfile(true) }}>
          <PersonIcon />
        </button >
        <button onClick={() => { setOpenContact(true) }}>
          <MailIcon />
        </button >
      </div>
      <PostView />
    </StyledComponent >
  );
}

export default Home;
