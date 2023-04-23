import React from 'react'
import { Typography, Box, SvgIcon, Paper  } from '@mui/material'
import serviceIcon from "../../../assets/service.svg";
import SkillIconImageItem from '../../../components/SkillIconImageItem';

const PurposeDescription = () => {


  return (
    <Box mb={{xs: 3, md: 0}}>
      <Box sx={{display: "flex", width: "fit-content", alignItems: "center", flexDirection: {xs:"row", md: "column"}, gap: 1}}>
        <Box sx={{filter: "invert(.6) brightness(.8)", height: {xs:"40px",sm:"50px",lg:"70px"}, width: {xs:"40px",sm:"50px",lg:"70px"}, mr:"auto", border: 3, borderRadius: 1, p: {xs:.75, md:1.5}, borderColor: "rgba(50,50,50,0.4)", mb: {xs:0, md: .75, lg: 1}}}>
          <SkillIconImageItem src={serviceIcon} objectFit='scale-down'/>
        </Box>
        <Typography variant="h4" align="left" fontSize={{xs:25, sm: 28, md: 32, lg: 35}} letterSpacing={{xs:1.5, md: 4}} sx={{opacity: .7}} color="secondary.main">My Purpose</Typography>
      </Box>
      <Box sx={{backgroundColor: "secondary.dark", height: "3px", width: "12px", mt: .75, mb: 4, opacity: .75, ml: .3, visibility: {xs: "hidden", md: "visible"}}}></Box>
      <Typography variant="body1" fontSize={{xs:16, sm: 17, md: 18.5}} sx={{mixBlendMode: "difference"}} letterSpacing={.5} fontWeight={200}>
        I am seeking for a position in the field of Web Development. 
        I want to challenge myself and apply the knowledge I gained throughout my learning journey.
        I am ready to work with the right company that will help me bring out my full potential.
      </Typography>
    </Box>
  )
}


export default PurposeDescription