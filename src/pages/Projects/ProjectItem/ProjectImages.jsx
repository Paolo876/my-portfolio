import React from 'react'
import { Grid, Box, Typography, ButtonBase } from '@mui/material'
import Image from 'mui-image'


const ProjectImages = ({ images, handleImageClick }) => {
  return (
    <Grid container columnSpacing={{xl: 4}} rowSpacing={{xl: 6}}>
      {images.map(item => <Grid item xl={6} key={item.name}>
        <Box 
          sx={{

            boxShadow: 5,
            transition: "all 200ms linear", 
            background: "rgba(0,0,0,0.75)", 
            filter: "brightness(.9) contrast(.85)", 
            overflow: "hidden", 
            "&:hover": {
              p: 0, 
              filter: "none"
            },
            "&:hover .title-overlay": {
              transform: "skewX(7deg) translateY(50px)", 
            }
          }}
        >
          <ButtonBase onClick={() => handleImageClick(item.name)} sx={{position: "relative"}}>
            <Image src={item.url}/>
            <Box 
              sx={{
                position: "absolute", 
                bottom:0, 
                left:-2, 
                pl: 2, 
                pr: 3, 
                py: .85, 
                transition: "all 100ms linear", 
                backgroundColor: "rgba(0,0,0,0.75)", 
                transform: "skewX(7deg)", 
                boxShadow: 10, 
                opacity: .9
              }}
              className="title-overlay"
            >
              <Box sx={{position : "absolute", height: "100%", width: 2, backgroundColor: "primary.dark", transform: "skewX(-7deg)", left: 1}}>

              </Box>
              <Box sx={{transform: "skewX(-7deg)"}}>
                <Typography 
                  variant="body2" 
                  fontWeight={400}
                  letterSpacing={.5}
                  sx={{
                    textShadow: "1px 1px 3px rgba(100,100,100,.05)",
                  }}
                  >{item.title}</Typography>
              </Box>
            </Box>

          </ButtonBase>
        </Box>
      </Grid>)}
    </Grid>
  )
}

export default ProjectImages