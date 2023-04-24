import React from 'react'
import { Typography, Box } from '@mui/material'
import serviceIcon from "../../../assets/service.svg";
import SkillIconImageItem from '../../../components/SkillIconImageItem';

const PurposeDescription = () => {


  return (
    <Box mb={{xs: 5, md: 0}}>
      <Box sx={{display: "flex", width: "fit-content", alignItems: "center", flexDirection: {xs:"row", md: "column"}, gap: 1}}>
        <Box sx={{filter: "invert(.6) brightness(.9)", height: {xs:"40px",sm:"50px", md: "65px", lg:"70px"}, width: {xs:"40px",sm:"50px", md: "65px", lg:"70px"}, mr:"auto", border: 3, borderRadius: 1, p: {xs:.75, md:1}, borderColor: "primary.main", mb: {xs:0, md: .25, lg: .25}}}>
          <SkillIconImageItem src={serviceIcon} objectFit='scale-down'/>
        </Box>
        <Typography variant="h4" align="left" fontSize={{xs:25, sm: 28, md: 32, lg: 35}} letterSpacing={{xs:1.5, md: 4}} sx={{opacity: .6}} color="secondary.main">My Purpose</Typography>
      </Box>
      <Box sx={{backgroundColor: "secondary.dark", height: "3px", width: "12px", mt: .75, mb: {xs:1, md: 2, lg: 3}, opacity: .65, ml: .3, visibility: {xs: "hidden", md: "visible"}}}></Box>
      <Typography variant="body1" fontSize={{xs:13, sm: 15, md: 16, lg: 18}} sx={{mixBlendMode: "difference"}} letterSpacing={.15} fontWeight={200}>
        To seek a Frontend/Backend/FullStack Developer position or related.<br/>
        To challenge myself and apply the knowledge I gained throughout my learning journey.<br/>
        To learn new technologies that I can add to my arsenal of skills.<br/>
        To work with the right company that will help me bring out my full potential.
      </Typography>
    </Box>
  )
}


export default PurposeDescription