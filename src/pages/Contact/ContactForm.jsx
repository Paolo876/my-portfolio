import React from 'react'
import { Box, Button, TextField } from '@mui/material'

const ContactForm = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Box sx={{my: 3.5, mx: 2, px: 5, py: 3, border: 3}} component="form" autoComplete="off" onSubmit={handleSubmit}>
      <Box sx={{display: "flex", flexDirection: "row", gap: 3, my: 2.25}}>
        <TextField id="firstName" label="First Name" variant="standard" fullWidth type="text"/>
        <TextField id="lastName" label="Last Name" variant="standard" fullWidth type="text"/>
      </Box>
      <TextField id="phone" label="Contact Number" variant="standard" fullWidth type="phone" sx={{my:2.25}}/>
      <TextField id="email" label="Email Address" variant="standard" fullWidth type="email" sx={{my:2.25}}/>
      <TextField
        id="message"
        label="Message"
        multiline
        fullWidth
        rows={6}
        sx={{my:2.25}}
        variant="outlined"
      />
      <Button type="submit" variant="contained" size="large" sx={{my:5, px: 5, fontWeight: 500, letterSpacing: 2.5, fontSize: 16}}>Submit</Button>
    </Box>
  )
}

export default ContactForm