import React from 'react'
import { Grid, Typography, Box } from '@mui/material'


const Skills = () => {
  return (
    <Grid container sx={{p: 5, justifyContent: "center", alignItems: "center", maxWidth: "1900px", mx: "auto", mt: 5}}>
      <Box>
        <Typography variant="h5" sx={{mixBlendMode: "difference"}} align='center' fontSize="1.75rem">Skills and Experience</Typography>
        <Box sx={{background: "white", height: "4px", width: "35px", mb: 10, mt: 3, mx: "auto", mixBlendMode: "difference" }}></Box>
      </Box>

      <Grid item xs={10.2}>

      </Grid>
    </Grid>
  )
}

export default Skills