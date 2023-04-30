import React from 'react'
import { Typography, Box } from '@mui/material'
import serviceIcon from "../../../assets/service.svg";
import SkillIconImageItem from '../../../components/SkillIconImageItem';

const PurposeDescription = () => {


  return (
    <Box mb={{xs: 5, md: 0}}> 
      <Box sx={{display: "flex", width: "fit-content", alignItems: "center", flexDirection: {xs:"row", md: "column"}, gap: 1}}>
        {/* <Box sx={{filter: "invert(.7) brightness(.9)", height: {xs:"40px",sm:"50px", md: "55px", lg:"60px"}, width: {xs:"40px",sm:"50px", md: "55px", lg:"60px"}, mr:"auto", border: 3, borderRadius: 1, p: {xs:.75, md:1}, borderColor: "primary.main", mb: {xs:0, md: .5, lg: .75}}}>
          <SkillIconImageItem src={serviceIcon} objectFit='scale-down'/>
        </Box> */}
        <Box sx={{mb: 3}}>
          <Typography variant="h4" fontSize={{md: 28, lg: 30, xl: 30}} letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:3.5}} lineHeight={{lg:1.6, xl:1.2}} color="primary.main" align="left">My Purpose</Typography>
          <Box sx={{background: "rgba(239,235,229,1)", height: 8, width: 8, mr: "auto", mt: {xs: 1.5, md:1.75}, ml: .2, mixBlendMode: "difference", opacity: .7}}></Box>
        </Box>      
      </Box>
      <Typography variant="body1" fontSize={{xs: 13, sm: 13, md: 13.5, lg:14, xl: 15}} fontWeight={300} sx={{textAlign: {xs: "justify"}, textJustify: "inter-word", opacity: .8}} mt={1} lineHeight={1.4}>
        To seek a Frontend|Backend|FullStack Developer position or related work.<br/>
      </Typography>
      <Typography variant="body1" fontSize={{xs: 13, sm: 13, md: 13.5, lg:14, xl: 15}} fontWeight={300} sx={{textAlign: {xs: "justify"}, textJustify: "inter-word", opacity: .8}} mt={1} lineHeight={1.4}>
        To apply my knowledge into practice and learn new technologies that would benefit the growth of the company and myself.<br/>
      </Typography>
      {/* <Typography variant="body1" fontSize={{xs: 13, sm: 13, md: 13.5, lg:14, xl: 15}} fontWeight={300} sx={{textAlign: {xs: "justify"}, textJustify: "inter-word", opacity: .8}} mt={1} lineHeight={1.4}>
        To work with a company that will help me bring out my full potential.
      </Typography> */}
    </Box>
  )
}


export default PurposeDescription