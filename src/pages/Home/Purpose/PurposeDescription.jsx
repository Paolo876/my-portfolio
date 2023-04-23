import React from 'react'
import { Typography, Box, SvgIcon, Paper  } from '@mui/material'
import serviceIcon from "../../../assets/service.svg";
import SkillIconImageItem from '../../../components/SkillIconImageItem';

const PurposeDescription = () => {


  return (
    <Box>
      <Box sx={{filter: "invert(.6) brightness(.8)", height: "90px", width: "90px", mr:"auto", border: 3, p: 1.5, borderColor: "rgba(0,0,0,0.5)", mb: 3}}>
        <SkillIconImageItem src={serviceIcon} objectFit='scale-down'/>
      </Box>
      <Typography variant="h4" align="left" fontSize={{xs:30, sm: 33, md: 36, lg: 38}} letterSpacing={{xs:1.5, md: 4}} sx={{opacity: .8}}>My Purpose</Typography>
      <Box sx={{background: "white", height: "3px", width: "12px", mt: 1.25, mb: 3, opacity: .8, ml: .3}}></Box>
      <Typography variant="body1" fontSize={18.5} sx={{mixBlendMode: "difference"}} letterSpacing={.5} fontWeight={200}>
        I am seeking for a position in the field of Web Development. 
        I want to challenge myself and apply the knowledge I gained throughout my learning journey.
        I am ready to work with the right company that will help me bring out my full potential.
      </Typography>
    </Box>
  )
}

export default PurposeDescription