import React from 'react'
import { Grid, Box, Typography } from '@mui/material'

const SubIntroduction = () => {
  return (
    <Grid container 
      sx={{
        px: {xs:2.5, sm: 3, md: 4, lg: 5.5, xl: 3}, 
        pt: {xs:8, sm: 10, md: 14, lg: 16}, 
        pb: {xs:6, sm: 8, md: 10, lg: 12}, 
        justifyContent: "center", 
        alignItems: "flex-start", 
        // minHeight: "36vh", 
        maxWidth: "1500px", 
        mx: "auto"
      }}
    >
      <Grid item xs={0} sm={3} md={5} lg={5}></Grid>
      <Grid item xs={12} sm={9} md={7} lg={7} mt="auto">
        <Box align="right">
          <Typography sx={{display: "inline", fontWeight: 400, fontSize: {xs: 13.5, sm: 16, md: 19, lg:22, xl: 26}, lineHeight: 1.35}}>I design and develop websites from a </Typography>
          <Typography sx={{display: "inline", fontWeight: 500, fontSize: {xs: 13.5, sm: 16, md: 19, lg:22, xl: 26}, lineHeight: 1.35}} >simple static page </Typography>
          <Typography sx={{display: "inline", fontWeight: 400, fontSize: {xs: 13.5, sm: 16, md: 19, lg:22, xl: 26}, lineHeight: 1.35}}>to a </Typography>
          <Typography sx={{display: "inline", fontWeight: 500, fontSize: {xs: 13.5, sm: 16, md: 19, lg:22, xl: 26}, lineHeight: 1.35}} >complex dynamic web application </Typography>
          <Typography sx={{display: "inline", fontWeight: 400, fontSize: {xs: 13.5, sm: 16, md: 19, lg:22, xl: 26}, lineHeight: 1.35}}> using </Typography>
          <Typography sx={{display: "inline", fontWeight: 500, fontSize: {xs: 13.5, sm: 16, md: 19, lg:22, xl: 26}, lineHeight: 1.35}} color="secondary.light"> ReactJS</Typography>
          <Typography sx={{display: "inline", fontWeight: 100, fontSize: {xs: 13.5, sm: 16, md: 19, lg:22, xl: 26}, lineHeight: 1.35}}>||</Typography>
          <Typography sx={{display: "inline", fontWeight: 500, fontSize: {xs: 13.5, sm: 16, md: 19, lg:22, xl: 26}, lineHeight: 1.35}} color="secondary.light">NextJS </Typography>
          <Typography sx={{display: "inline", fontWeight: 400, fontSize: {xs: 13.5, sm: 16, md: 19, lg:22, xl: 26}, lineHeight: 1.35}}>framework.</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SubIntroduction