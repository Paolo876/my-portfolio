import { useState } from 'react'
import { Box, ButtonBase, TextField, Typography, Alert, Button } from '@mui/material'
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
    opacity: .9;
  }
`;


const ContactForm = ({ success, setSuccess }) => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ number, setNumber ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ error, setError ] = useState(false);

  const validateInput = (type) => {
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true)
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
          borderColor: "rgba(200,200,200,.75)",
          display: "flex", 
          flexDirection: "column",
          boxShadow: 8,
          backgroundColor: "rgba(45,45,45,.3)"
        }} 
        component="form" 
        autoComplete="off" 
        onSubmit={handleSubmit}
      >
      <Box>
        <Typography 
          variant="body1"
          sx={{
            mt: {xs: 1, sm:2, md:3},
            fontSize: {xs: 10, sm: 14.5, md: 15, lg:15, xl: 14.5},
            fontWeight: 300,
            opacity: .95,
            transform: "skewX(-5deg)",
            letterSpacing: .5,
            lineHeight: 1.6,
            textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            textAlign: "left"
          }}
        >
          Please feel free to reach out to me using my contact informations provided or by submitting this form.
        </Typography>
      </Box>
        <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: {xs: 0, sm: 3}, my: {xs: 1, sm: 1.5, md: 1.75, lg: 1.5, xl: 2}}}>
          <TextField 
            id="firstName" 
            label="First Name" 
            variant="standard" 
            fullWidth 
            type="text" 
            InputProps={inputStyles} 
            InputLabelProps={inputLabelStyles} 
            inputProps={{maxLength: 25}} 
            sx={{mt: {xs: 0, sm: 1.5, md: 1.75, lg: 1.5, xl: 2}}} 
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
          />
          <TextField 
            id="lastName" 
            label="Last Name" 
            variant="standard" 
            fullWidth 
            type="text" 
            InputProps={inputStyles} 
            InputLabelProps={inputLabelStyles} 
            inputProps={{maxLength: 25}} 
            sx={{mt: {xs: 1, sm: 1.5, md: 1.75, lg: 1.5, xl: 2}}}
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </Box>
        <TextField 
          id="phone" 
          label="Contact Number" 
          variant="standard" 
          fullWidth 
          type="phone" 
          sx={{my: {xs: 0, sm: 1.5, md: 1.75, lg: 1.5, xl: 2}}} 
          InputProps={inputStyles} 
          InputLabelProps={inputLabelStyles}
          inputProps={{maxLength: 15}}
          onChange={e => setNumber(e.target.value)}
          value={number}
        />
        <TextField 
          id="email" 
          label="Email Address" 
          variant="standard" 
          fullWidth 
          type="email" 
          sx={{my: {xs: 1, sm: 1.5, md: 1.75, lg: 1.5, xl: 2}}} 
          InputProps={inputStyles} 
          InputLabelProps={inputLabelStyles}
          inputProps={{maxLength: 50}}
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <Box sx={{position: "relative", my:{xs: 3.5, sm: 4, md:4, lg: 5}}}>
          <TextField
            id="message"
            label="Message"
            multiline
            fullWidth
            rows={6}
            sx={{}}
            variant="outlined"
            InputProps={inputStyles} InputLabelProps={inputLabelStyles}
            inputProps={{maxLength: 300}}
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
          {message.length !== 0 && <Box sx={{position: "absolute", bottom: 0, right: 5}}>
            <Typography 
              sx={{
                fontSize: {xs: 9.5, sm: 10, md: 11, lg:12, xl: 12},
                opacity: .6,
                transform: "skewX(-5deg)"
              }}
            >{message.length}/300</Typography>
          </Box>}
        </Box>

        <Box my={{xs: 2, sm: 3, md: 4, }}>
          <Button 
            type="submit" 
            color="inherit"
            sx={{
              boxShadow: 5,
              border: 2, 
              fontSize: { xs: ".85rem", sm: "1rem", md: "1rem", lg: "1.1rem" },
              lineHeight: 1.4, 
              borderColor: "primary.dark",
              px: {xs: 4, sm: 4, md: 4, lg: 6},
              py: {xs: .75, sm:1, md: 1.5, },
              fontWeight: 500,
              letterSpacing: {xs: 1.5, sm: 2, md: 3},
              opacity: {xs: .95, lg:.85},
              transition: "all 250ms ease-in-out",
              textTransform: "uppercase",
              "&:hover":{
                opacity:1,
                textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                transform: "scale(1.02)",
                borderColor: "primary.main",
                letterSpacing: {xs: 2, sm: 2.5, md: 3.5},
              }
            }}
            disabled={error}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactForm