import React from 'react'
import { Box, Fade, Typography } from '@mui/material'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const FormSuccess = () => {
  return (
    <Fade appear={true} in={true} timeout={200}  style={{ transitionDelay: "200ms" }}>

      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Box>
          <Typography>Form submitted!</Typography>
        </Box>
        <Box>
          <DoneOutlineIcon/>
        </Box>
        <Box>
          <Typography>Thank you for reaching out! We'll be in touch soon.</Typography>
        </Box>
      </Box>
    </Fade>
  )
}

export default FormSuccess