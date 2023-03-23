import React from 'react'
import SkillIconImageItem from '../../components/SkillIconImageItem'

import { Box, Typography } from '@mui/material'
import javascript from "../../assets/icons/javascript.svg"
import react from "../../assets/icons/react.svg"
import nextjs from "../../assets/icons/nextjs.svg"
import redux from "../../assets/icons/redux.svg"
import nodejs from "../../assets/icons/nodejs.svg"
import express from "../../assets/icons/express.svg"
import socketio from "../../assets/icons/socketio.svg"
import mysql from "../../assets/icons/mysql.svg"
import mongodb from "../../assets/icons/mongodb.svg"
import firebase from "../../assets/icons/firebase.svg"
import sass from "../../assets/icons/sass.svg"
import bootstrap from "../../assets/icons/bootstrap.svg"
import materialui from "../../assets/icons/materialui.svg"

const skillsIcons = {
  frontend: [
    {src: javascript, name: "JavaScript"},
    {src: react, name: "React"},
    {src: nextjs, name: "NextJs"},
    {src: redux, name: "Redux"},
  ],
  backend: [
    {src: nodejs, name: "NodeJs"},
    {src: express, name: "ExpressJs"},
    {src: socketio, name: "Socket.io"},
    {src: mysql, name: "MySQL"},
    {src: mongodb, name: "MongoDB"},
    {src: firebase, name: "firebase"},
  ],
  styling: [
    {src: sass, name: "Sass/Scss"},
    {src: bootstrap, name: "Bootstrap / React-Bootstrap"},
    {src: materialui, name: "Material-UI"},

  ],
}

const SkillsShowcase = () => {
  return (
    <Box>
      <Box sx={{display: "flex", flexDirection: "row", gap: 1.5}}>
        {skillsIcons.frontend.map(item => 
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <SkillIconImageItem src={item.src} height="30px" width="30px" duration="800" objectFit='scale-down'/>
            <Typography variant="body2" sx={{mixBlendMode: "difference", fontSize: 12, fontWeight: 200, mt: .5}}>{item.name}</Typography>
          </Box>
        )}
        {skillsIcons.styling.map(item => 
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <SkillIconImageItem src={item.src} height="30px" width="30px" duration="800" objectFit='scale-down'/>
            <Typography variant="body2" sx={{mixBlendMode: "difference", fontSize: 12, fontWeight: 200, mt: .5}}>{item.name}</Typography>
          </Box>
        )}
      </Box>
      <Box sx={{display: "flex", flexDirection: "row", gap: 1.5}}>
        {skillsIcons.backend.map(item => 
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <SkillIconImageItem src={item.src} height="30px" width="30px" duration="800" objectFit='scale-down'/>
            <Typography variant="body2" sx={{mixBlendMode: "difference", fontSize: 12, fontWeight: 200, mt: .5}}>{item.name}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SkillsShowcase