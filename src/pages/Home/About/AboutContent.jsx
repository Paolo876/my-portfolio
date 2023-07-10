import React from 'react'
import { Grid, Box, Typography, ButtonBase } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Skills from './Skills/Skills';

const AboutContent = () => {
  return (
    <Grid container sx={{maxWidth: "1500px", mx: "auto", height: "90%", px: {md: 0,lg:2, xl: 4}}}>
			<Grid item xs={12}>
				<Grid container columnSpacing={5}>
					<Grid item><Box sx={{height: 200, width: 200, border: 1}}></Box></Grid>
					<Grid item xs={9}>
						<Box>
							<Typography>I am Paolo Bugarin, a Full Stack Web Developer based in Los Angeles, California <LocationOnIcon/></Typography>
							{/* <Typography>a Full Stack Web Developer based in Los Angeles, California <LocationOnIcon/></Typography> */}
						</Box>
						<Box>
							<Typography>
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
		</Grid>
    )
}

export default AboutContent