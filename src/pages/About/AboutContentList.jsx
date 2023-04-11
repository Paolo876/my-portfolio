import React from 'react'
import { Divider, Stack } from '@mui/material'
import Summary from './AboutContentItems/Summary'
import SocialLinks from '../../components/SocialLinks'
import Skills from "./AboutContentItems/Skills"


const AboutContentList = () => {
  return (
    <Stack>
      <Divider><SocialLinks iconSize="small" gap={1} buttonSize="medium" flexDirection="row"/></Divider>
      <Summary/>
      <Skills/>
    </Stack>
  )
}

export default AboutContentList