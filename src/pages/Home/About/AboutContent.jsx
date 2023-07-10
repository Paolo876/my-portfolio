import React from 'react'
import { Grid, Box, Typography, ButtonBase } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Skills from './Skills/Skills';

const AboutContent = () => {
  return (
    <Grid container sx={{maxWidth: "1500px", mx: "auto", height: "90%", px: {md: 0,lg:2, xl: 4}}}>
			<Grid item xs={12}>
				<Grid container columnSpacing={12}>
					<Grid item xs={3}><Box sx={{height: 325, width: 275, border: 1}}></Box></Grid>
					<Grid item xs={9}>
						{/* <Box>
							<Typography 
								variant="h2" 
								fontWeight={400}
								fontSize={{lg: 45, xl: 50}} 
								letterSpacing={1}
								lineHeight={{lg:1.6, xl:1.1}} 
								textTransform="none"
								sx={{
									textShadow: "1px 1px 7px rgba(10,10,10,.75)",
								}}
							>
								Who am I
							</Typography>
							<Box sx={{background: "rgba(239,235,229,1)", height: "2px", width: "16px", mr: "auto", mt: {xs: 1, md:1, lg: 1.5}, mr: .5, mixBlendMode: "difference", opacity: .85, boxShadow: 5}}></Box>
						</Box> */}
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
							{/* <Typography>a Full Stack Web Developer based in Los Angeles, California <LocationOnIcon/></Typography> */}
						</Box>
						<Box mt={2} sx={{maxWidth: "90%"}}>
							<Typography
								variant="body1" 
								sx={{
									fontSize: {xs: 13, sm: 14, md: 15, lg:16, xl: 17},
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
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Skills/>
			</Grid>
			<Grid item xs={12} mt={3}>
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
        </Grid>
		</Grid>
    )
}

export default AboutContent