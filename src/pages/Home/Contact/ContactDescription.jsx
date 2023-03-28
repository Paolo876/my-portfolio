import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Typography, Button } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const ContactDescription = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Typography variant="h4">Let's Talk!</Typography>
        <Box sx={{background: "white", height: "3px", width: "20px", mt: 3.5}} ></Box>
      </Box>
      <Box mt={8}>
        <Typography sx={{fontWeight: 200, fontSize: 18, opacity: .8, lineHeight: 1.75}}>
          If you have any questions or inquiries, please feel free to get in touch with me through my contact informations provided.
        </Typography>
        <Typography sx={{fontWeight: 200, fontSize: 18, opacity: .8, lineHeight: 1.75, mt: 1.5}}>
          You can also reach me through submitting the inquiry form in my contact page
        </Typography>
      </Box> 
      <Box mt={5}>
        <Button 
          variant="outlined" 
          color="primary"
          endIcon={<KeyboardArrowRightIcon color="inherit"/>}
          onClick={() => navigate("/about")}
          size="large"
        >
          Contact Page
        </Button>
      </Box>
    </>
  )
}

export default ContactDescription