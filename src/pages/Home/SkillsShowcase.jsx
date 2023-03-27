import React from 'react'
import SkillIconImageItem from '../../components/SkillIconImageItem'

import { Box, Typography, Grid } from '@mui/material'
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
    {src: bootstrap, name: "Bootstrap"},
    {src: materialui, name: "Material-UI"},

  ],
}

const boxStyles = {
  py: 2.5, 
  my: 1.5, 
  border: "1px solid rgba(200,200,200,.05)", 
  borderRadius: 2,
  maxWidth: "90px",
  userSelect: "none",
  opacity: .9,  
}

const textStyles = {
  mixBlendMode: "difference", 
  fontSize: 11.5, 
  fontWeight: 300, 
  mt: 1,
  // color: "primary.dark"
}

const SkillsShowcase = () => {
  return (
    <Grid container px={5}>
      {skillsIcons.frontend.map(item => 
        <Grid item xs={4} key={item.name} align="center">
          <Box sx={boxStyles}>
            <SkillIconImageItem src={item.src} height="50px" width="50px" duration={800} objectFit='scale-down'/>
            <Typography variant="body2" sx={textStyles}>{item.name}</Typography>
          </Box>
        </Grid>
      )}
      {skillsIcons.backend.map(item => 
        <Grid item xs={4} key={item.name} sx={{}} align="center">
          <Box sx={boxStyles}>
            <SkillIconImageItem src={item.src} height="50px" width="50px" duration={800} objectFit='scale-down'/>
            <Typography variant="body2" sx={textStyles}>{item.name}</Typography>
          </Box>
        </Grid>
      )}
      {skillsIcons.styling.map(item => 
        <Grid item xs={4} key={item.name} sx={{}} align="center">
        <Box sx={boxStyles}>
          <SkillIconImageItem src={item.src} height="50px" width="50px" duration={800} objectFit='scale-down'/>
          <Typography variant="body2" sx={textStyles}>{item.name}</Typography>
        </Box>
        </Grid>
      )}
    </Grid>
  )
}

export default SkillsShowcase


{/* <Box sx={{display: "flex", flexDirection: "column", gap: 2, py: 1.5, justifyContent: "center", alignItems: "center"}}>
<Box sx={{display: "flex", flexDirection: "row", gap: 1.5, alignItems:"center"}}>
  {skillsIcons.frontend.map(item => 
    <Box key={item.name} sx={{display: "flex", flexDirection: "column", alignItems: "center", width: "60px"}}>
      <SkillIconImageItem src={item.src} height="30px" width="30px" duration={800} objectFit='scale-down'/>
      <Typography variant="body2" sx={{mixBlendMode: "difference", fontSize: 11.5, fontWeight: 200, mt: .5}}>{item.name}</Typography>
    </Box>
  )}
  {skillsIcons.styling.map(item => 
    <Box key={item.name}  sx={{display: "flex", flexDirection: "column", alignItems: "center", width: "60px"}}>
      <SkillIconImageItem src={item.src} height="30px" width="30px" duration={800} objectFit='scale-down'/>
      <Typography variant="body2" sx={{mixBlendMode: "difference", fontSize: 11.5, fontWeight: 200, mt: .5}}>{item.name}</Typography>
    </Box>
  )}
</Box>
<Box sx={{display: "flex", flexDirection: "row", gap: 1.5, alignItems:"center"}}>
  {skillsIcons.backend.map(item => 
    <Box key={item.name}  sx={{display: "flex", flexDirection: "column", alignItems: "center", width: "60px"}}>
      <SkillIconImageItem src={item.src} height="30px" width="30px" duration={800} objectFit='scale-down'/>
      <Typography variant="body2" sx={{mixBlendMode: "difference", fontSize: 11.5, fontWeight: 200, mt: .5}}>{item.name}</Typography>
    </Box>
  )}
</Box>
</Box> */}