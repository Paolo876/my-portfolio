import React from 'react'
import { Grid, Box, Typography, ButtonBase } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Skills from './Skills/Skills';

const AboutContent = ({ isVisible }) => {
  return (
    <Grid container sx={{maxWidth: "1500px", mx: "auto", height: "90%", px: {md: 0,lg:2, xl: 4}}}>
			<Grid item xs={12}>
				<Grid container columnSpacing={12}>
					<Grid item xs={3}><Box sx={{height: 300, width: 250, border: 1}}></Box></Grid>
					<Grid item xs={9} sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
						<Box>
							<Typography
								variant="h2" 
								fontWeight={400}
								fontSize={{lg: 34, xl: 36}} 
								letterSpacing={1}
								lineHeight={{lg:1.6, xl:1.4}} 
								textTransform="none"
								sx={{
									textShadow: "1px 1px 7px rgba(10,10,10,.75)",
								}}
							>I am Paolo Bugarin, <br/>a Full Stack Web Developer based in Los Angeles, California.</Typography>
						</Box>
						<Box pb={3} sx={{maxWidth: "98%"}}>
							<Typography
								variant="body1" 
								sx={{
									fontSize: {xs: 14, sm: 15, md: 16, lg:17, xl: 18},
									fontWeight: 300,
									opacity: .55,
									letterSpacing: .4,
									textShadow: "1px 1px 5px rgba(10,10,10,.75)",
								}}
							>
              	I studied Computer Information Systems major in Web Development and Software Development at Pasadena City College. 
								A big part of my knowledge is also gained from self-studying through online courses, tutorials, and being part of different coding groups.
							</Typography>
						</Box>
						<Box mb={1.5}>
							<ButtonBase
								sx={{
									borderLeft: 2, 
									fontSize: { xs: "1.25rem", sm: "1.3rem", md: "1.4rem", lg: "1.5rem", xl:"1.5rem" },
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
			<Grid item xs={12} mt={12}>
				<Skills isVisible={isVisible}/>
			</Grid>
		</Grid>
    )
}

export default AboutContent