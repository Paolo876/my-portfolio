import React from 'react'
import { Box, ButtonBase, IconButton,  } from '@mui/material';
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

const actionsContainer = {
  zIndex: 2, 
  width: "100%", 
  background: "rgba(120, 120, 120, .85)", 
  height: { xl: 150 },
  display: "flex",
  ".active": {
    border: 2,
    opacity: 1,
  }
}

const imageItemStyles = {
  height: 130, 
  border: 2, 
  borderColor: "transparent", 
  p: .5, 
  opacity: .5, 
  transition: "all 250ms ease", 
  "&:hover": { 
    opacity: 1, 
    borderColor: "rgba(50,50,50, .5)",  
  }
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

      <Box sx={{zIndex: 3, boxShadow:10, maxHeight: "70vh"}}>
        <Image src={image.url} duration={300} fit="scale-down"/>
      </Box>

      {/* actions */}
      <Box sx={actionsContainer}>
        <IconButton color="primary" size="large"><ArrowBackIosNewIcon fontSize='large'/></IconButton>
        <Box sx={{flex: 1, display: "flex", gap: 2, alignItems: "center", justifyContent: "center"}} >
          {/* images list here */}
          {imagesList.map(item => <Box key={item.name}>
            <ButtonBase 
              sx={imageItemStyles} 
              className={item.name === imageName ? "active" : ""}
            >
              <Image src={item.url} duration={200} />
            </ButtonBase>
          </Box>)}
        </Box>
        <IconButton color="primary" size="large"><ArrowForwardIosIcon fontSize='large'/></IconButton>
      </Box>
    </Box>
  )
}

export default ImageModal