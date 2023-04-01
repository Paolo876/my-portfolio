import React, { useState } from 'react'
import SkillIconImageItem from '../../../components/SkillIconImageItem'

import { Box, Typography, Grid, Paper, ButtonBase } from '@mui/material'
import RightChevron from "../../../assets/chevron-right.svg"

import javascript from "../../../assets/icons/javascript.svg"
import typescript from "../../../assets/icons/typescript.svg"
import react from "../../../assets/icons/react.svg"
import nextjs from "../../../assets/icons/nextjs.svg"
import redux from "../../../assets/icons/redux.svg"
import nodejs from "../../../assets/icons/nodejs.svg"
import express from "../../../assets/icons/express.svg"
import socketio from "../../../assets/icons/socketio.svg"
import mysql from "../../../assets/icons/mysql.svg"
import mongodb from "../../../assets/icons/mongodb.svg"
import firebase from "../../../assets/icons/firebase.svg"
import sass from "../../../assets/icons/sass.svg"
import bootstrap from "../../../assets/icons/bootstrap.svg"
import materialui from "../../../assets/icons/materialui.svg"
import c from "../../../assets/icons/c.svg"
import java from "../../../assets/icons/java.svg"
import oracle from "../../../assets/icons/oracle.svg"
import python from "../../../assets/icons/python.svg"
import sequelize from "../../../assets/icons/sequelize.svg"

const skillsIcons = {
  frontend: [
    {src: javascript, name: "JavaScript"},
    {src: typescript, name: "TypeScript"},
    {src: react, name: "React"},
    {src: nextjs, name: "NextJs"},
    {src: redux, name: "Redux"},
  ],
  backend: [
    {src: nodejs, name: "NodeJs"},
    {src: express, name: "ExpressJs"},
    {src: socketio, name: "Socket.io"},
    {src: sequelize, name: "Sequelize"},
    {src: mysql, name: "MySQL"},
    {src: mongodb, name: "MongoDB"},
    {src: firebase, name: "Firebase"},
  ],
  styling: [
    {src: sass, name: "Sass/Scss"},
    {src: bootstrap, name: "Bootstrap"},
    {src: materialui, name: "Material-UI"},
  ],
  programming: [
    {src: c, name: "C++"},
    {src: java, name: "Java"},
    {src: oracle, name: "Oracle SQL"},
    {src: python, name: "Python"},

  ]
}

const boxStyles = {
  py: 2.5, 
  my: 1.5, 
  width: "90px",
  height: "120px",
  userSelect: "none",
  opacity: .95,  
}

const textStyles = {
  mixBlendMode: "difference", 
  fontSize: 11.5, 
  fontWeight: 300, 
  mt: 1,
}

const mainSkills = [ ...skillsIcons.frontend, ...skillsIcons.backend, ...skillsIcons.styling ];
const otherSkills = [...skillsIcons.programming, ]

const SkillsShowcase = () => {
  const [ skills, setSkills ] = useState({id: 'main', array: mainSkills});

  const handleClick = () => {
    if(skills.id === "main"){
      setSkills({id: 'other', array: otherSkills})
    } else {
      setSkills({id: 'main', array: mainSkills})
    }
  }


  return (
    <Grid container px={5} sx={{position: "relative"}}>
      {skills.id !== "main" && <Grid item xs={1} sx={{my: 1.5}} gridRow="span 2">
        <ButtonBase sx={{height: "100%", transform: "rotate(180deg)"}} draggable={false} onClick={handleClick}>
          <Box sx={{opacity: .85}}>
            <SkillIconImageItem src={RightChevron} height="40px" width="40px" duration={800} objectFit='scale-down'/>
          </Box>
        </ButtonBase>
      </Grid>}
      <Grid item xs={11}>
        <Grid container>
          {skills.array.map(item => 
            <Grid item xs={2.25} key={item.name} align="center">
              <Paper sx={boxStyles} elevation={2}>
                <Box>
                  <SkillIconImageItem src={item.src} height="50px" width="50px" duration={800} objectFit='scale-down'/>
                  <Typography variant="body2" sx={textStyles}>{item.name}</Typography>
                </Box>
              </Paper>

            </Grid>
          )}
        </Grid>
      </Grid>
      {skills.id === "main" && <Grid item xs={1} sx={{my: 1.5}} gridRow="span 2">
        <ButtonBase sx={{height: "100%"}} draggable={false} onClick={handleClick}>
          <Box sx={{opacity: .85}}>
            <SkillIconImageItem src={RightChevron} height="40px" width="40px" duration={800} objectFit='scale-down'/>
          </Box>
        </ButtonBase>
      </Grid>}
    </Grid>
  )
}

export default SkillsShowcase