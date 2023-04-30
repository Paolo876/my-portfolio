import React from 'react'
import { Typography, Box } from '@mui/material'
import SkillIconImageItem from '../../../components/SkillIconImageItem'
import targetIcon from "../../../assets/target.svg"

const MissionDescription = () => {
  return (
  <Box>
    <Box sx={{display: "flex", width: "fit-content", alignItems: "center", flexDirection: {xs:"row", md: "column"}, gap: 1}}>
      {/* <Box sx={{filter: "invert(.7) brightness(.9)", height: {xs:"40px",sm:"50px", md: "55px", lg:"60px"}, width: {xs:"40px",sm:"50px", md: "55px", lg:"60px"}, mr:"auto", border: 3, borderRadius: 1, p: {xs:.75, md:1}, borderColor: "primary.main", mb: {xs:0, md: .5, lg: .75}}}>
        <SkillIconImageItem src={targetIcon} objectFit='scale-down'/>
      </Box> */}
      <Box sx={{mb: 3}}>
        <Typography variant="h4" fontSize={{md: 28, lg: 30, xl: 30}} letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:3.5}} lineHeight={{lg:1.6, xl:1.2}} color="primary.main" align="left">My Mission</Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: 8, width: 8, mr: "auto", mt: {xs: 1.5, md:1.75}, ml: .2, mixBlendMode: "difference", opacity: .7}}></Box>
      </Box>       
    </Box>
    <Typography variant="body1" fontSize={{xs: 13, sm: 13, md: 13.5, lg:14, xl: 15}} fontWeight={300} sx={{textAlign: {xs: "justify"}, textJustify: "inter-word", opacity: .8}} mt={1} lineHeight={1.4}>
      To provide an efficient solution for a company's development needs.<br/>
    </Typography>
    <Typography variant="body1" fontSize={{xs: 13, sm: 13, md: 13.5, lg:14, xl: 15}} fontWeight={300} sx={{textAlign: {xs: "justify"}, textJustify: "inter-word", opacity: .8}} mt={1} lineHeight={1.4}>
      To offer my services and provide a positive representation for the company.<br/>
    </Typography>
    <Typography variant="body1" fontSize={{xs: 13, sm: 13, md: 13.5, lg:14, xl: 15}} fontWeight={300} sx={{textAlign: {xs: "justify"}, textJustify: "inter-word", opacity: .8}} mt={1} lineHeight={1.4}>
      To work as a team player and be a reliable member to ensure a more productive system.<br/>
    </Typography>
  </Box>
  )
}

export default MissionDescription