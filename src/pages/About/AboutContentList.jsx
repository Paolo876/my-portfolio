import React from 'react'
import { Divider, Stack, Box } from '@mui/material'
import Summary from './AboutContentItems/Summary'
import SocialLinks from '../../components/SocialLinks'
import Skills from "./AboutContentItems/Skills"


const AboutContentList = () => {
  return (
    <Stack sx={{position: "relative"}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(200,200,200,.35)", mixBlendMode: "overlay", zIndex: -1}}></Box>
      <Summary/>
      <Summary/>
      <Skills/>
    </Stack>
  )
}

export default AboutContentList