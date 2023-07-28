import React from 'react'
import { Grid, Box, Typography, ButtonBase } from '@mui/material'
import Image from 'mui-image'


const ProjectImages = ({ images, handleImageClick }) => {
  return (
    <Grid container columnSpacing={{xl: 4}} rowSpacing={{xl: 6}}>
      {images.map(item => <Grid item xl={6} key={item.name}>
        <Box 
          sx={{
            // py: 1.5, 
            // px: 2.5, 
            boxShadow: 5,
            transition: "all 200ms linear", 
            background: "rgba(0,0,0,0.75)", 
            filter: "brightness(.95) contrast(.85)", 
            overflow: "hidden", 
            "&:hover": {
              p: 0, 
              filter: "none"
            }
          }}
        >
          <ButtonBase onClick={() => handleImageClick(item.name)}>
            <Image src={item.url}/>
          </ButtonBase>
        </Box>
      </Grid>)}
    </Grid>
  )
}

export default ProjectImages