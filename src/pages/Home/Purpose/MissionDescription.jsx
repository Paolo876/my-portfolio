import React from 'react'
import { Typography, Box } from '@mui/material'
import SkillIconImageItem from '../../../components/SkillIconImageItem'
import targetIcon from "../../../assets/target.svg"

const MissionDescription = () => {
  return (
  <Box>
    <Box sx={{display: "flex", width: "fit-content", alignItems: "center", flexDirection: {xs:"row", md: "column"}, gap: 1}}>
      <Box sx={{filter: "invert(.7) brightness(.9)", height: {xs:"40px",sm:"50px", md: "55px", lg:"60px"}, width: {xs:"40px",sm:"50px", md: "55px", lg:"60px"}, mr:"auto", border: 3, borderRadius: 1, p: {xs:.75, md:1}, borderColor: "primary.main", mb: {xs:0, md: .5, lg: .75}}}>
        <SkillIconImageItem src={targetIcon} objectFit='scale-down'/>
      </Box>
      <Typography variant="h4" align="left" fontSize={{xs:25, sm: 28, md: 32, lg: 35}} letterSpacing={{xs:1.5, md: 4, lg: 5}} sx={{opacity: 1}} color="secondary.main">Mission</Typography>
    </Box>
    <Box sx={{backgroundColor: "secondary.light", height: "3px", width: "12px", mt: .75, mb: {xs:1, md: 2, lg: 3}, opacity: .65, ml: .3, visibility: {xs: "hidden", md: "visible"}}}></Box>
    <Typography variant="body1" fontSize={{xs:13, sm: 15, md: 16, lg: 17}} sx={{opacity: .8}} letterSpacing={.05} fontWeight={300}>
      To provide an efficient solution for a company's development needs.<br/>
      To offer my services and provide a positive representation for the company.<br/>
      To work as a team player and be a reliable member to ensure a more productive system.<br/>
    </Typography>
  </Box>
  )
}

export default MissionDescription