import React from 'react'
import { Grid, Typography, Box, useTheme } from "@mui/material"

const Services = () => {
  const {palette: { background }} = useTheme();
  return (
    <Grid container sx={{height: "75vh"}}>
      <Box>
        <Typography variant="h3">My Services</Typography>

      </Box>
    </Grid>

  )
}

export default Services