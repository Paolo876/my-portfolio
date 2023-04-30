import React from 'react'
import { Typography, Box } from '@mui/material'
import SkillIconImageItem from '../../../components/SkillIconImageItem'
import targetIcon from "../../../assets/target.svg"

const MissionDescription = () => {
  return (
  <Box mb={{xs: 5, md: 0}}> 
    <Box sx={{mb: 3}}>
      <Typography variant="h4" fontSize={{xs:23, sm: 24, md: 25, lg: 26, xl: 28}} letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:3.5}} lineHeight={{lg:1.6, xl:1.2}} color="primary.main">My Mission</Typography>
      <Box sx={{background: "rgba(239,235,229,1)", height: 8, width: 8, mr: "auto", ml: .2, mt: {xs: 1.5, md:1.75}, mixBlendMode: "difference", opacity: .7}}></Box>
    </Box>       
    <Typography variant="body1" fontSize={{xs: 14, sm: 14, md: 13.5, lg:15, xl: 16}} fontWeight={300} sx={{textAlign: {xs: "justify"}, textJustify: "inter-word", opacity: .8}} mt={1} lineHeight={1.4}>
      To provide an efficient solution for a company's development needs.<br/>
    </Typography>
    <Typography variant="body1" fontSize={{xs: 14, sm: 14, md: 13.5, lg:15, xl: 16}} fontWeight={300} sx={{textAlign: {xs: "justify"}, textJustify: "inter-word", opacity: .8}} mt={1} lineHeight={1.4}>
      To offer my services and provide a positive representation for the company.<br/>
    </Typography>
    <Typography variant="body1" fontSize={{xs: 14, sm: 14, md: 13.5, lg:15, xl: 16}} fontWeight={300} sx={{textAlign: {xs: "justify"}, textJustify: "inter-word", opacity: .8}} mt={1} lineHeight={1.4}>
      To work as a team player and be a reliable member to ensure a more productive system.<br/>
    </Typography>
  </Box>
  )
}

export default MissionDescription