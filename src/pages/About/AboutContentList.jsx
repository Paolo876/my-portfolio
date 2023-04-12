import React from 'react'
import { Stack, Box } from '@mui/material'
import Roadmap from './AboutContentItems/Roadmap'
import Skills from "./AboutContentItems/Skills"


const AboutContentList = () => {
  return (
    <Stack sx={{position: "relative"}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(200,200,200,.5)", mixBlendMode: "overlay", zIndex: -1}}></Box>
      <Roadmap/>
      <Skills/>
    </Stack>
  )
}

export default AboutContentList