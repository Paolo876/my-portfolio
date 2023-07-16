import React from 'react'
import { Grid, Box, Typography, ButtonBase } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Skills from './Skills/Skills';

const AboutContent = ({ isVisible }) => {
  return (
    <Grid container sx={{maxWidth: "1500px", mx: "auto", height: "90%"}}>
			<Grid item xs={12}>
				<Grid container columnSpacing={{sm:3, md: 6, lg: 6, xl:12}}>
					<Grid item xs={3}><Box sx={{height: {sm: 180, md: 240, lg: 280, xl: 300 }, width: {sm: 130, md: 190, lg: 230, xl: 250}, border: 1}}></Box></Grid>
					<Grid item xs={9} sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
						<Box>
							<Typography
								variant="h2" 
								fontWeight={400}
								fontSize={{sm: 23.5, md: 26, lg: 32, xl: 36}} 
								letterSpacing={{xs: .5, lg: 1}}
								lineHeight={1.4} 
								textTransform="none"
								sx={{
									textShadow: "1px 1px 7px rgba(10,10,10,.75)",
								}}
							>I am Paolo Bugarin, <br/>a Full Stack Web Developer based in <Box component="br" sx={{display: {md: "none"}}}></Box>Los Angeles, California.</Typography>
						</Box>
						<Box pb={{md: 1.5, lg:3}} pt={{sm:2, md: 0}} sx={{maxWidth: "100%"}}>
							<Typography
								variant="body1" 
								sx={{
									fontSize: {xs: 12, sm: 13, md: 14, lg:16, xl: 17},
									fontWeight: 300,
									opacity: .55,
									letterSpacing: .4,
									textShadow: "1px 1px 5px rgba(10,10,10,.75)",
									pr: {xl: 2}
								}}
							>
              	I studied Computer Information Systems major in Web Development and Software Development at Pasadena City College. 
								A big part of my knowledge is also gained from self-studying through online courses, tutorials, and participating in different coding groups.
							</Typography>
						</Box>
						<Box mb={{lg: 1.5}} sx={{display: {xs: "none", md: "initial"}}}>
							<ButtonBase
								sx={{
									borderLeft: 2, 
									fontSize: { xs: "1.25rem", sm: "1.3rem", md: "1.3rem", lg: "1.45rem", xl:"1.5rem" },
									lineHeight: 1.4, 
									color: "white", 
									borderColor: "primary.dark",
									px: 1.5,
									py: .25,
									fontWeight: 600,
									letterSpacing: .4,
									opacity: .85,
									transition: "all 250ms ease-in-out",
									fontFamily: "Manrope",
									"&:hover":{
										opacity:1,
										textShadow: "1px 1px 3px rgba(100,100,100,.75)",
										transform: "scale(1.02)",
										borderColor: "primary.main",
									}
								}}
							>
								Read More About Me
							</ButtonBase>
						</Box>
					</Grid>
          <Grid item xs={12} sx={{display: {xs: "initial", md: "none"}}} mt={4}>
            <Box>
              <ButtonBase
                sx={{
                  borderLeft: 2, 
                  fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.3rem", lg: "1.45rem", xl:"1.5rem" },
                  lineHeight: 1.4, 
                  color: "white", 
                  borderColor: "primary.dark",
                  px: 1.5,
                  py: .25,
                  fontWeight: 600,
                  letterSpacing: .4,
                  opacity: .85,
                  transition: "all 250ms ease-in-out",
                  fontFamily: "Manrope",
                  "&:hover":{
                    opacity:1,
                    textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                    transform: "scale(1.02)",
                    borderColor: "primary.main",
                  }
                }}
              >
                Read More About Me
              </ButtonBase>
            </Box>
          </Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} mt={{md: 8, lg: 8, xl: 12}}>
				<Skills isVisible={isVisible}/>
			</Grid>
      <Grid item xs={12} mt={3}>
        <Box>
          <ButtonBase
            sx={{
              borderLeft: 2, 
              fontSize: { xs: "1.1rem", sm: "1.2rem" },
              lineHeight: 1.4, 
              color: "white", 
              borderColor: "primary.dark",
              px: 1.5,
              py: .25,
              fontWeight: 600,
              letterSpacing: .4,
              opacity: .85,
              transition: "all 250ms ease-in-out",
              fontFamily: "Manrope",
              "&:hover":{
                opacity:1,
                textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                transform: "scale(1.02)",
                borderColor: "primary.main",
              }
            }}
          >
            See All My Skills
          </ButtonBase>
        </Box>
      </Grid>
		</Grid>
    )
}

export default AboutContent