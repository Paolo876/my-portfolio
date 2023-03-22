import React from 'react'
import PageContainer from '../../components/PageContainer'
import { Grid, Typography, Box} from '@mui/material'


const Home = () => {
  return (
    <PageContainer>
      <Grid container sx={{height: "100%", px: 5, width: "fit-content", justifyContent: "center", pt: "15%"}}>
        <Grid item xs={12} md={2}>
          <Box sx={{border: 3, borderRadius: "50%", height: 150, width: 150, display: "flex", alignItems: "center", justifyContent: "center", mixBlendMode: "difference", mx: "auto"}}>
            <Typography >image-here</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, perferendis eos! Vel, accusamus aliquam unde eum ducimus ipsam similique eius molestias nam enim id voluptate exercitationem libero! Reprehenderit sint, consectetur recusandae mollitia culpa voluptates, temporibus necessitatibus nostrum perferendis quidem vero.
            </Typography>
          </Box>
        </Grid>
      </Grid>

    </PageContainer>
  )
}

export default Home