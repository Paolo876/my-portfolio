import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Typography, Button } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const ContactDescription = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box mt={{xs:3, sm: 4, md: 5, lg: 1}}>
        <Typography variant="body1" fontSize={{xs: 15, sm: 15, md: 15.5, lg:16, xl: 17}} fontWeight={400} sx={{textAlign: {xs: "justify"}, textJustify: "inter-word"}} lineHeight={1.4}>
          I am excited to take a leap forward and further hone my knowledge and skills with the right company.
        </Typography>
        <Typography variant="body1" fontSize={{xs: 14, sm: 14, md: 15, lg:16, xl: 16}} fontWeight={300} sx={{textAlign: {xs: "justify"}, textJustify: "inter-word", opacity: .8}} mt={1} lineHeight={1.4}>
          For any questions or inquiries, please feel free to get in touch with me through my contact informations provided. 
          <br/>You can also reach me through submitting the inquiry form in my contact page.
        </Typography>

      </Box> 
      <Box mt={{xs:5, md: 6, lg: 8}}>
        <Button 
          variant="outlined" 
          color="primary"
          endIcon={<KeyboardArrowRightIcon color="inherit"/>}
          onClick={() => navigate("/contact")}
          sx={{fontWeight: 500, letterSpacing: 1.5, fontSize: {xs: 11, sm: 12, md: 14, lg: 15, xl: 16}}}
        >
          Contact Page
        </Button>
      </Box>
    </>
  )
}

export default ContactDescription