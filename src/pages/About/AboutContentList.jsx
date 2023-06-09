import React from 'react'
import { Stack } from '@mui/material'
import Roadmap from './AboutContentItems/Roadmap'
import Skills from "./AboutContentItems/Skills"
import Bio from './AboutContentItems/Bio'


const AboutContentList = () => {
  return (
    <Stack sx={{position: "relative"}}>
      <Skills/>
      <Roadmap/>
    </Stack>
  )
}

export default AboutContentList