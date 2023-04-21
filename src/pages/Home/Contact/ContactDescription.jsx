import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Typography, Button } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const ContactDescription = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box mt={{xs:3, sm: 4, md: 5, lg: 6}}>
        <Typography sx={{fontWeight: 300, fontSize: {xs:15, sm: 17, md: 18, lg: 19}, opacity: .95, lineHeight: 1.5}}>
          I am excited to take a leap forward and further hone my knowledge and skills with the right company.
        </Typography>
        <Typography sx={{fontWeight: 200, fontSize: {xs:14, sm: 15, md: 16, lg: 17}, opacity: .8, lineHeight: 1.45}} mt={3}>
          For any questions or inquiries, please feel free to get in touch with me through my contact informations provided. 
          <br/>You can also reach me through submitting the inquiry form in my contact page.
        </Typography>

      </Box> 
      <Box mt={{xs:4, md: 6, lg: 8}}>
        <Button 
          variant="outlined" 
          color="primary"
          endIcon={<KeyboardArrowRightIcon color="inherit"/>}
          onClick={() => navigate("/contact")}
          sx={{fontSize: {xs: 11, sm: 13, md: 14, lg: 16}}}
        >
          Contact Page
        </Button>
      </Box>
    </>
  )
}

export default ContactDescription