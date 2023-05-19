import React from 'react'
import { Box, Button, Stack, TextField } from '@mui/material'

const ContactForm = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Stack sx={{py: 5}} align="center">
      <Box sx={{py: 3, px: 3, border: 3, minHeight: {md: "60vh"}, display: "flex", flexDirection: "column"}} component="form" autoComplete="off" onSubmit={handleSubmit}>
        <Box sx={{display: "flex", flexDirection: "row", gap: 3, my: 1.5}}>
          <TextField id="firstName" label="First Name" variant="standard" fullWidth type="text"/>
          <TextField id="lastName" label="Last Name" variant="standard" fullWidth type="text"/>
        </Box>
        <TextField id="phone" label="Contact Number" variant="standard" fullWidth type="phone" sx={{my:1.5}}/>
        <TextField id="email" label="Email Address" variant="standard" fullWidth type="email" sx={{my:1.5}}/>
        <TextField
          id="message"
          label="Message"
          multiline
          fullWidth
          rows={5}
          sx={{my:2}}
          variant="outlined"
        />
        <Box>
          <Button type="submit" variant="contained" size="large" sx={{my:5, px: 5, fontWeight: 500, letterSpacing: 2.5, fontSize: 16}}>Submit</Button>
        </Box>
      </Box>
    </Stack>
  )
}

export default ContactForm