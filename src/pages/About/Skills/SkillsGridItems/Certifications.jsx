import React from 'react'
import { Typography, Box, Grid, ButtonBase } from '@mui/material'
import useRootRedux from '../../../../hooks/useRootRedux'


const Certifications = () => {
  const { certifications } = useRootRedux();

  return (
    <Grid container sx={{mb: { xs: 4, sm: 10, md: 10, lg: 10, xl: 15}}} columnSpacing={{xl: 5}}>
      <Grid item xs={12} sm={12} lg={3} xl={4}>
        <Box mb={{xs: 2, sm: 4, md: 6, lg:3}}>
          <Typography 
            variant="h2" 
            align="left" 
            fontWeight={400}
            fontSize={{xs: 26, sm: 27, md: 28, lg: 30, xl: 30}} 
            letterSpacing={{xs: .5, xl:1}}
            lineHeight={{xs:1}} 
            textTransform="none"
            sx={{
              textShadow: "1px 1px 7px rgba(25,25,25,.75)",
            }}
          >
            Certifications
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} lg={9}  xl={8}>
        <Grid container pt={1.5} sx={{justifyContent: "center"}}>
          {certifications.map(item => <Grid item key={item.name} xs={11} sm={6} md={4} pr={{sm: .75, md: 1.25, lg: 2}} pl={{sm: .75, md: 1.25, lg: 0}} pb={{xs: 1.25, md:3}}>
            <ButtonBase 
              sx={{
                boxShadow: 5,
                border: 2, 
                height: "100%", 
                width: "100%",
                // fontSize: { xs: ".9rem", sm: "1rem", md: "1rem", lg: "1rem" },
                lineHeight: 1.4, 
                borderColor: {xs: "primary.dark", sm:"rgba(100,100,100,.75)"},
                px: {sm: .5, md: .75},
                py: 1,
                fontWeight: 600,
                letterSpacing: .5,
                opacity: .75,
                transition: "all 250ms ease-in-out",
                boxShadow: 10,                
                "&:hover":{
                  opacity:1,
                  transform: "scale(1.025)",
                  borderColor: "primary.dark",
                },
                "&:hover p":{
                  textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                },
              }}
              href={item.url} 
              target="_blank"
            >
              <Box 
                sx={{
                  p: { xs: .75, md:1} , 
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }} 
                elevation={2}               
              >
                <Typography 
                  variant="h2" 
                  align="left" 
                  fontWeight={500}
                  fontSize={{xs: 15, sm: 16, md: 17, lg: 17.5, xl: 18}} 
                  letterSpacing={{xs: .5, xl:1}}
                  lineHeight={{xs:1}} 
                  textTransform="none"
                  sx={{
                    textShadow: "1px 1px 7px rgba(25,25,25,.75)",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{
                    fontSize: {xs: 12, sm: 13, md: 13, lg:14, xl: 14.5},
                    fontWeight: 300,
                    opacity: .6,
                    letterSpacing: .2,
                    lineHeight: 1.4,
                    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                    mt: 1,
                  }}
                >
                  {item.author}
                </Typography>
              </Box>
            </ButtonBase>
          </Grid>)}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Certifications