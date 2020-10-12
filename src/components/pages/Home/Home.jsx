import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import StyledComponent from "./Home.styled"

import Contact from "../Contact"
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
      <h1 className="top-msg">今日も楽しい選択をしよう！</h1>
      <p className="user-info">{user.name}でログイン中...</p>
      <PostView />
    </StyledComponent>
  );
}

export default Home;
