import React from 'react'
import logo from "../assets/logo.svg"
import { Box, Typography } from '@mui/material'
import Image from 'mui-image'
import { keyframes } from '@mui/system';

const animation = keyframes`
0% {
  opacity: .25;
  filter: "brightness(20%)"
}
100% {
  opacity: .5;
  filter: "brightness(100%)"

}
`;

const LoadingIcon = ({message}) => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", gap: 2.5}}>
      <Box sx={{height: 45, width: "auto", animation: `${animation} 750ms ease infinite alternate`}}>
        <Image src={logo} fit="scale-down"/>
      </Box>
      {message && <Box>
        <Typography 
          variant='subtitle1' 
          sx={{
            fontSize: {xs: 11, sm: 11, md: 13, lg: 14}, 
            transform: "skewX(-3deg)",
            letterSpacing: 1.5,
            textShadow: "1px 1px 3px rgba(200,200,200,.25)",
            fontWeight: 300,
            color: "secondary.main"
          }}>{message}</Typography>
      </Box>}
    </Box>
  )
}

export default LoadingIcon