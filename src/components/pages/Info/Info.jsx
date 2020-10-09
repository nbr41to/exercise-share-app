import React, { useState, useContext } from 'react';
import StyledComponent from "./Info.styled"
import ReactMarkdown from 'react-markdown'
import markdown from "../../../info.md"

function Info({ markdownText }) {
  console.log(markdownText)
  return (
    <StyledComponent>
      <ReactMarkdown
        source={markdownText}
      />
    </StyledComponent >
  );
}

export default Info;
