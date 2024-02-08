import { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { keyframes } from '@mui/system';
import TextInput from './FormInputs/TextInput';
import PhoneInput from './FormInputs/PhoneInput';
import EmailInput from './FormInputs/EmailInput';
import MessageInput from './FormInputs/MessageInput';


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


const ContactForm = ({ success, setSuccess,  }) => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ number, setNumber ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");

  const isSubmitDisabled = firstName.trim().length === 0 || lastName.trim().length === 0 || number.trim().length === 0 || email.trim().length === 0;

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstName, lastName, number, email, message)
    // upload to db
    
    // notify email
    setSuccess(true)
  }

  return (
    <Box 
      sx={{
        pb: {xs: 1, sm:3, md:3, lg: 0}, 
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
        <Box mb={{xs: 1.5, sm: 1.75, md: 2, lg: 2}}>
          <Typography 
            variant="body1"
            sx={{
              mt: {xs: 1, sm:2, md:3},
              fontSize: {xs: 10, sm: 13, md: 13.5, lg:14},
              fontWeight: 400,
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
        <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: {xs: 0, sm: 3}, mb: {xs: 1, sm: 1.5, md: 1.75, lg: 1.5}}}>
          <TextInput
            id="firstName" 
            label="First Name"
            setValue={value => setFirstName(value)}
          />
          <TextInput
            id="lastName" 
            label="Last Name"
            setValue={value => setLastName(value)}
          />
        </Box>
        <PhoneInput
          id="phone"
          label="Contact Number"
          setValue={value => setNumber(value)}

        />
        <EmailInput
          id="email" 
          label="Email Address" 
          setValue={value => setEmail(value)}
        />
        <MessageInput
          id="message"
          label="Message"
          setValue={value => setMessage(value)}
          maxLength={300}
        />
        <Box my={{xs: 2, sm: 3, md: 4, }}>
          <Button 
            type="submit" 
            color="inherit"
            sx={{
              boxShadow: 5,
              border: 2, 
              fontSize: { xs: ".85rem", sm: "1rem", md: "1rem", lg: "1.1rem" },
              lineHeight: 1.4, 
              borderColor: isSubmitDisabled ? "primary.dark" : "primary.light",
              px: {xs: 4, sm: 4, md: 4, lg: 5},
              py: {xs: .75, sm:1, md: 1.5, },
              fontWeight: 500,
              letterSpacing: {xs: 1.5, sm: 2, md: 3.25, lg: 3.75 },
              opacity: isSubmitDisabled ? .7 : .95,
              transition: "all 250ms ease-in-out",
              transform: isSubmitDisabled ? "scale(.95)" : "scale(1)",
              textTransform: "uppercase",
              "&:hover":{
                opacity:1,
                textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                transform: "scale(1.02)",
                borderColor: "primary.main",
                letterSpacing: {xs: 2, sm: 2.5, md: 3.5},
              }
            }}
            disabled={isSubmitDisabled}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactForm