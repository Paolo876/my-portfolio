import React from 'react'
import { Stack } from '@mui/material'
import Roadmap from './AboutContentItems/Roadmap'
import Skills from "./AboutContentItems/Skills"
import Background from './AboutContentItems/Background'


const AboutContentList = () => {
  return (
    <Stack sx={{position: "relative"}}>
      <Roadmap/>
      <Skills/>
      <Background/>
    </Stack>
  )
}

export default AboutContentList