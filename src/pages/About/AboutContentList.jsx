import React from 'react'
import { Stack } from '@mui/material'
import Roadmap from './AboutContentItems/Roadmap'
import Skills from "./AboutContentItems/Skills"
import Bio from './AboutContentItems/Bio'


const AboutContentList = () => {
  return (
    <Stack sx={{position: "relative"}}>
      <Roadmap/>
      <Skills/>
      <Bio/>
    </Stack>
  )
}

export default AboutContentList