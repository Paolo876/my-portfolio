import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, Button } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Works = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{position: "relative"}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(255,255,255,.5)", mixBlendMode: "overlay", opacity: 1, zIndex: -1}}></Box>
      <Grid container sx={{px: {xs:0, sm: 0, md: 1.5, lg: 3, xl:0}, py: {xs:8, sm: 9, md: 10, lg: 10, xl: 12}, justifyContent: {xs:"center", md: "space-between"}, alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
        <Grid item xs={12} md={5} lg={7.75}>
          <Typography 
            variant="h2" 
            fontWeight={800} 
            fontSize={{xs:32, sm: 32, md: 42, lg: 40, xl: 60}} 
            letterSpacing={{xs:2, sm:2, md: 2, lg: 2, xl:3.5}} 
            lineHeight={1.1} 
            sx={{opacity: .9}}
            
            color="primary.main"
          >
            Explore<br/>My Works
          </Typography>
          {/* <Box mt={{xs: 3, sm: 4, md: 6, lg: 7, xl: 8}} sx={{opacity: .9}}>
            <Button 
              variant="outlined" 
              endIcon={<KeyboardArrowRightIcon color="inherit"/>}
              onClick={() => navigate("/projects")}
              sx={{fontSize: {xs: 11, sm: 12, md: 14, lg: 15, xl: 16}, letterSpacing: 1.75}}
            >
              Projects
            </Button>
          </Box> */}
      </Grid>
        <Grid item xs={12} md={7} lg={3.75}>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Works