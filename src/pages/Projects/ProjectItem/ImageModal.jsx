import React from 'react'
import { Box,  } from '@mui/material';
import Image from 'mui-image';

const containerStyles = {
  height: "100vh",
  width: "100vw",
  position: "absolute",
  zIndex: 1,
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)"
}


const ImageModal = ({ imageName, imagesList, handleClose }) => {
  const image = imagesList.find(item => item.name === imageName)
  
  const handleCloseClick = (e) => {
    e.stopPropagation();
    handleClose()
  }


  return (
    <Box sx={containerStyles} onClick={handleCloseClick}>
      <Box sx={{height: "auto", width: "auto", zIndex:2}}>
        <Image src={image.url} duration={300} fit="scale-down"/>
      </Box>
    </Box>
  )
}

export default ImageModal