import React from 'react'
import { Typography, Box } from '@mui/material'
import SkillIconImageItem from '../../../components/SkillIconImageItem'
import targetIcon from "../../../assets/target.svg"

const MissionDescription = () => {
  return (
  <Box>
    <Box sx={{display: "flex", width: "fit-content", alignItems: "center", flexDirection: {xs:"row", md: "column"}, gap: 1}}>
      <Box sx={{filter: "invert(.6) brightness(.8)", height: {xs:"40px",sm:"50px", md: "65px", lg:"70px"}, width: {xs:"40px",sm:"50px", md: "65px", lg:"70px"}, mr:"auto", border: 3, borderRadius: 1, p: {xs:.75, md:1.5}, borderColor: "rgba(50,50,50,0.4)", mb: {xs:0, md: 1, lg: 1}}}>
        <SkillIconImageItem src={targetIcon} objectFit='scale-down'/>
      </Box>
      <Typography variant="h4" align="left" fontSize={{xs:25, sm: 28, md: 32, lg: 35}} letterSpacing={{xs:1.5, md: 4}} sx={{opacity: .6}} color="secondary.main">My Mission</Typography>
    </Box>
    <Box sx={{backgroundColor: "secondary.dark", height: "3px", width: "12px", mt: .75, mb: {xs:1, md: 2, lg: 3}, opacity: .65, ml: .3, visibility: {xs: "hidden", md: "visible"}}}></Box>
    <Typography variant="body1" fontSize={{xs:15, sm: 17, md: 18}} sx={{mixBlendMode: "difference"}} letterSpacing={.5} lineHeight={1.4} fontWeight={200}>
      To provide a solution for a 
    </Typography>
  </Box>
  )
}

export default MissionDescription