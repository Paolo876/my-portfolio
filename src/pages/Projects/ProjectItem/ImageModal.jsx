import React from 'react'
import { Box, ButtonBase, IconButton, Typography,  } from '@mui/material';
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
  maxWidth: "1500px",
  mx: "auto",
  display: "flex",
  py: 1,
  ".active": {
    border: 2,
    opacity: 1,
    borderColor: "primary.main"
  }
}

const imageListItemStyles = {
  height: 130, 
  border: 2, 
  borderColor: "transparent", 
  p: .5, 
  opacity: .65, 
  transition: "all 250ms ease",
  "&:hover": { 
    opacity: 1, 
    borderColor: "primary.dark",  
  }
}


const ImageModal = ({ imageName, imagesList, handleClose, setShowModal }) => {
  const image = imagesList.find(item => item.name === imageName)
  
  const handleCloseClick = (e) => {
    e.stopPropagation();
    handleClose()
  }


  const handlePrevItemClick = () => {
    const index = imagesList.findIndex(item => item.name === imageName)
    if(index === 0){
      setShowModal({isVisible: true, imageName: imagesList[imagesList.length - 1].name})
    } else {
      setShowModal({isVisible: true, imageName: imagesList[index - 1].name})
    }
  }

  const handleNextItemClick = () => {
    const index = imagesList.findIndex(item => item.name === imageName)
    if(index === imagesList.length - 1){
      setShowModal({isVisible: true, imageName: imagesList[0].name})
    } else {
      setShowModal({isVisible: true, imageName: imagesList[index + 1].name})
    }
  }


  return (
    <Box sx={containerStyles}>
      <Box sx={{zIndex: 2, height: "100vh", width: "100vw", position: "absolute"}} onClick={handleCloseClick}></Box>

      <Box sx={{zIndex: 3, boxShadow:10, maxHeight: "70vh", position: "relative", overflow: "hidden"}}>
        <Image src={image.url} duration={300} fit="scale-down"/>
        {image.title && <Box sx={{position: "absolute", top: 0, left: -10, backgroundColor: "rgba(25, 25, 25, 0.75)", transform: "skewX(-7deg)", boxShadow: 10}}>
          <Typography
            variant="h5" 
            fontWeight={300}
            letterSpacing={.5}
            fontSize={{xs: 25, sm: 27, md: 28, lg: 29, xl: 30}} 
            pl={3}
            pr={5}
            py={1.5}
            sx={{
              textShadow: "1px 1px 7px rgba(10,10,10,.75)",
              transform: "skewX(7deg)",
              textTransform: "none",
            }}
          >
            {image.title}
          </Typography>
        </Box>}
      </Box>

      {/* actions */}
      <Box sx={{zIndex: 2, width: "100%", background: "rgba(70, 70, 70, .9)", boxShadow: 10, }}>
        <Box sx={actionsContainer}>
          <IconButton color="primary" size="large" onClick={handlePrevItemClick}><ArrowBackIosNewIcon fontSize='large'/></IconButton>
          <Box sx={{flex: 1, display: "flex", gap: 2, alignItems: "center", justifyContent: "center", overflowX: "auto"}} >
            {/* images list here */}
            {imagesList.map(item => <Box key={item.name} sx={{width: {xl: 180}, display: "inline-block"}}>
              <ButtonBase 
                sx={imageListItemStyles} 
                className={item.name === imageName ? "active" : ""}
                onClick={() => setShowModal({isVisible: true, imageName: item.name})}
              >
                <Image src={item.url} duration={200} />
              </ButtonBase>
            </Box>)}
          </Box>
          <IconButton color="primary" size="large" onClick={handleNextItemClick}><ArrowForwardIosIcon fontSize='large'/></IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default ImageModal