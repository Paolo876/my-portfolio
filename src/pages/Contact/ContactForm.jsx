import React from 'react'
import { Box, ButtonBase, TextField } from '@mui/material'

const inputStyles = {
  sx: {
    fontSize: { xs: 13, sm: 15, md:16 },
    fontWeight: 400,
    letterSpacing: .25,
    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
    "&:hover": {
      textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    }
  }
}

const inputLabelStyles = {
  sx: {
    fontSize: { xs: 13, sm: 15, md:16 },
    fontWeight: 200,
    opacity: .75,
    letterSpacing: .75,
    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
  }
}

const ContactForm = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Box 
      sx={{
        py: {xs: 1, sm:3, md:4 }, 
        mb: {xs: 3, sm: 0}
      }} 
      align="center"
    >
      <Box 
        sx={{
          p: {xs: 1.5, sm:2.5, md:3, lg: 4}, 
          border: 2, 
          borderColor: "rgba(100,100,100,.75)",
          // minHeight: {md: "60vh"}, 
          display: "flex", 
          flexDirection: "column",
          boxShadow: 8,
          backgroundColor: "rgba(45,45,45,.25)"
        }} 
        component="form" 
        autoComplete="off" 
        onSubmit={handleSubmit}
      >
        <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: {xs: 0, sm: 3}, my: {xs: 1, md: 1.5, lg: 2}}}>
          <TextField id="firstName" label="First Name" variant="standard" fullWidth type="text" InputProps={inputStyles} InputLabelProps={inputLabelStyles}/>
          <TextField id="lastName" label="Last Name" variant="standard" fullWidth type="text" InputProps={inputStyles} InputLabelProps={inputLabelStyles}/>
        </Box>
        <TextField id="phone" label="Contact Number" variant="standard" fullWidth type="phone" sx={{my: {xs: 1, md: 1.5, lg: 2}}} InputProps={inputStyles} InputLabelProps={inputLabelStyles}/>
        <TextField id="email" label="Email Address" variant="standard" fullWidth type="email" sx={{my: {xs: 1, md: 1.5, lg: 2}}} InputProps={inputStyles} InputLabelProps={inputLabelStyles}/>
        <TextField
          id="message"
          label="Message"
          multiline
          fullWidth
          rows={6}
          sx={{my:{xs: 3, md:4}}}
          variant="outlined"
          InputProps={inputStyles} InputLabelProps={inputLabelStyles}
        />
        <Box my={{xs: 1, sm: 3, md: 4, }}>
          <ButtonBase 
            type="submit" 
            color="inherit"
            sx={{
              boxShadow: 5,
              border: 2, 
              fontSize: { xs: ".9rem", sm: "1rem", md: "1rem", lg: "1.1rem" },
              lineHeight: 1.4, 
              borderColor: {xs: "primary.dark", sm:"rgba(100,100,100,.75)"},
              px: {xs: 1.5, sm: 2, md: 3, lg: 4},
              py: 1,
              fontWeight: 500,
              letterSpacing: 1,
              opacity: .75,
              transition: "all 250ms ease-in-out",
              "&:hover":{
                opacity:1,
                textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                transform: "scale(1.02)",
                borderColor: "primary.dark",
                letterSpacing: 1.25,
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