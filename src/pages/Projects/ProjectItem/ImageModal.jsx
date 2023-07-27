import React from 'react'
import { Box,  } from '@mui/material';
import Image from 'mui-image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const containerStyles = {
  zIndex:5, 
  height: "100vh", 
  width: "100vw", 
  position: "relative", 
  display: "flex", 
  alignItems: "center", 
  flexDirection: "column",
  justifyContent: "space-between",
  pt: "10vh",
  backdropFilter: "blur(2px) contrast(80%) brightness(50%)",
}


const ImageModal = ({ imageName, imagesList, handleClose }) => {
  const image = imagesList.find(item => item.name === imageName)
  
  const handleCloseClick = (e) => {
    e.stopPropagation();
    handleClose()
  }


  return (
    <Box sx={containerStyles}>
      <Box sx={{zIndex: 2, height: "100vh", width: "100vw", position: "absolute"}} onClick={handleCloseClick}></Box>

      <Box sx={{zIndex: 3, boxShadow:10, maxHeight: "75vh"}}>
        <Image src={image.url} duration={300} fit="scale-down"/>
      </Box>

      {/* actions */}
      <Box sx={{zIndex: 2, width: "100%", background: "rgba(120, 120, 120, .85)", height: {xl: 100}}}></Box>
    </Box>
  )
}

export default ImageModal