import React from 'react'
import { Box, Button, Stack, TextField } from '@mui/material'

const inputStyles = {
  sx: {
    fontSize: { xs: 13, sm: 15, md:16 },
    fontWeight: 400,
    letterSpacing: .25,

  }
}

const inputLabelStyles = {
  sx: {
    fontSize: { xs: 13, sm: 15, md:16 },
    fontWeight: 200,
    opacity: .75,
    letterSpacing: .75,
  }
}

const ContactForm = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Stack sx={{py: {xs: 1, sm:3,md:5}, mb: {xs: 3, sm: 0}}} align="center">
      <Box sx={{p: {xs: 2, sm:2.5, md:3}, border: 3, minHeight: {md: "60vh"}, display: "flex", flexDirection: "column"}} component="form" autoComplete="off" onSubmit={handleSubmit}>
        <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: {xs: 0, sm: 3}, my: {xs: .5, md: 1.5}}}>
          <TextField id="firstName" label="First Name" variant="standard" fullWidth type="text" InputProps={inputStyles} InputLabelProps={inputLabelStyles}/>
          <TextField id="lastName" label="Last Name" variant="standard" fullWidth type="text" InputProps={inputStyles} InputLabelProps={inputLabelStyles}/>
        </Box>
        <TextField id="phone" label="Contact Number" variant="standard" fullWidth type="phone" sx={{my: {xs: .5, md: 1.5}}} InputProps={inputStyles} InputLabelProps={inputLabelStyles}/>
        <TextField id="email" label="Email Address" variant="standard" fullWidth type="email" sx={{my: {xs: .5, md: 1.5}}} InputProps={inputStyles} InputLabelProps={inputLabelStyles}/>
        <TextField
          id="message"
          label="Message"
          multiline
          fullWidth
          rows={6}
          sx={{my:2}}
          variant="outlined"
          InputProps={inputStyles} InputLabelProps={inputLabelStyles}
        />
        <Box>
          <Button 
            type="submit" 
            variant="contained" 
            size="large" 
            sx={{
              my:{xs: 3, md: 5}, 
              px: 5, 
              fontWeight: 500, 
              letterSpacing: 2.5, 
              fontSize: 16
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Stack>
  )
}

export default ContactForm