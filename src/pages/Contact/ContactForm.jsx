import React from 'react'
import { Box, ButtonBase, TextField } from '@mui/material'
import { keyframes } from '@mui/system';


const inputStyles = {
  sx: {
    fontSize: { xs: 11, sm: 14.5, md: 15, lg: 15, xl:15 },
    fontWeight: 500,
    letterSpacing: .1,
    lineHeight: 1.25, 
    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
    "&:hover": {
      textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    }
  }
}

const inputLabelStyles = {
  sx: {
    fontSize: { xs: 11.5, sm: 15, md: 15, lg: 15, xl:15 },
    fontWeight: 200,
    opacity: .75,
    letterSpacing: .75,
    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
  }
}


const slideLeft = keyframes`
  0% {
    transform: translateX(2.25em);
    opacity: 0;
  }
  80% {
    opacity: .7;
  }
  100% {
    transform: translateX(0);
    opacity: .75;
  }
`;


const ContactForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Box 
      sx={{
        pb: {xs: 1, sm:3, md:3, lg: 0, xl: 0 }, 
        mb: {xs: 4, lg: 0},
        px: {xs: .5, sm: 1, md: 3, lg: 0},
        opacity: 0, 
        animation: `${slideLeft} 1100ms ease forwards 1250ms`,
      }} 
      align="center"
    >
      <Box 
        sx={{
          p: {xs: 3, sm:4, md:5, lg: 4}, 
          border: 2, 
          borderColor: "rgba(100,100,100,.75)",
          display: "flex", 
          flexDirection: "column",
          boxShadow: 8,
          backgroundColor: "rgba(45,45,45,.45)"
        }} 
        component="form" 
        autoComplete="off" 
        onSubmit={handleSubmit}
      >
        <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: {xs: 0, sm: 3}, my: {xs: 1, sm: 1.5, md: 1.75, lg: 1.5, xl: 2}}}>
          <TextField id="firstName" label="First Name" variant="standard" fullWidth type="text" InputProps={inputStyles} InputLabelProps={inputLabelStyles} inputProps={{maxLength: 25}} sx={{mt: {xs: 0, sm: 1.5, md: 1.75, lg: 1.5, xl: 2}}} />
          <TextField id="lastName" label="Last Name" variant="standard" fullWidth type="text" InputProps={inputStyles} InputLabelProps={inputLabelStyles} inputProps={{maxLength: 25}} sx={{mt: {xs: 1, sm: 1.5, md: 1.75, lg: 1.5, xl: 2}}} />
        </Box>
        <TextField id="phone" label="Contact Number" variant="standard" fullWidth type="phone" sx={{my: {xs: 0, sm: 1.5, md: 1.75, lg: 1.5, xl: 2}}} InputProps={inputStyles} InputLabelProps={inputLabelStyles}  inputProps={{maxLength: 15}}/>
        <TextField id="email" label="Email Address" variant="standard" fullWidth type="email" sx={{my: {xs: 1, sm: 1.5, md: 1.75, lg: 1.5, xl: 2}}} InputProps={inputStyles} InputLabelProps={inputLabelStyles}  inputProps={{maxLength: 50}}/>
        <TextField
          id="message"
          label="Message"
          multiline
          fullWidth
          rows={6}
          sx={{my:{xs: 3.5, sm: 4, md:4, lg: 5}}}
          variant="outlined"
          InputProps={inputStyles} InputLabelProps={inputLabelStyles}
          inputProps={{maxLength: 400}}
        />
        <Box my={{xs: 2, sm: 3, md: 4, }}>
          <ButtonBase 
            type="submit" 
            color="inherit"
            sx={{
              boxShadow: 5,
              border: 2, 
              fontSize: { xs: ".85rem", sm: "1rem", md: "1rem", lg: "1.1rem" },
              lineHeight: 1.4, 
              borderColor: "primary.dark",
              px: {xs: 4, sm: 4, md: 4, lg: 4},
              py: {xs: .75, sm:1},
              fontWeight: 500,
              letterSpacing: 1.25,
              opacity: .75,
              transition: "all 250ms ease-in-out",
              "&:hover":{
                opacity:1,
                textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                transform: "scale(1.02)",
                borderColor: "primary.main",
                letterSpacing: 1.5,
              }
            }}
          >
            Submit
          </ButtonBase>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactForm