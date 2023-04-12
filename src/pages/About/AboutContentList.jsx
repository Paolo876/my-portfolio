import React from 'react'
import { Stack, Box } from '@mui/material'
import Roadmap from './AboutContentItems/Roadmap'
import Skills from "./AboutContentItems/Skills"


const AboutContentList = () => {
  return (
    <Stack sx={{position: "relative"}}>
      <Roadmap/>
      <Skills/>
    </Stack>
  )
}

export default AboutContentList