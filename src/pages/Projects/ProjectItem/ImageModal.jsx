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
  height: "auto", 
  border: {xs: 1, md: 2}, 
  borderColor: {xs: "transparent", md:"transparent"}, 
  p: {xs: .25, sm: .25, md: .4, lg:.5}, 
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

      <Box sx={{zIndex: 3, boxShadow:10, maxHeight: "70vh", maxWidth: {xs: "93vw", md: "91vw"}, position: "relative", overflow: "hidden", my: "auto"}}>
        <Image src={image.url} duration={300} fit="scale-down"/>
        {image.title && <Box sx={{position: "absolute", top: 0, left: -10, backgroundColor: "rgba(25,25,25,0.8)", transform: "skewX(-9deg)", boxShadow: 10}}>
          <Typography 
            variant="h4" 
            fontWeight={300}
            fontSize={{xs: 16, sm: 18, md: 20, lg: 23, xl: 23}} 
            letterSpacing={{xs: .5, xl:1}}
            lineHeight={{xs:1}} 
            textTransform="none"
            pl={{xs: 2.5, md:3}}
            pr={{xs: 3.75, sm: 4, md:5}}
            py={{xs: 1.15, sm: 1.25, md:1.5}}
            sx={{
              textShadow: "1px 1px 7px rgba(10,10,10,.75)",
              transform: "skewX(9deg)",
            }}
          >
            {image.title}
          </Typography>
        </Box>}
      </Box>

      {/* actions */}
      <Box sx={{zIndex: 2, width: "100%", backgroundColor: "rgba(100,100,100,.6)", boxShadow: 10, }}>
        <Box sx={actionsContainer}>
          <IconButton color="primary" size="large" onClick={handlePrevItemClick}><ArrowBackIosNewIcon sx={{fontSize: {xs: 25, sm: 26, md: 30, lg: 32, xl: 35}}}/></IconButton>
          <Box sx={{flex: 1, display: "flex", gap: {xs: .5, sm: 1.5, md:2}, alignItems: "center", justifyContent: "center", overflowX: "auto"}} >
            {/* images list here */}
            {imagesList.map(item => <Box key={item.name} sx={{width: {sm: 100, md: 150, lg: 160, xl: 160}, height: "auto", display: "inline-block"}}>
              <ButtonBase 
                sx={imageListItemStyles} 
                className={item.name === imageName ? "active" : ""}
                onClick={() => setShowModal({isVisible: true, imageName: item.name})}
              >
                <Image src={item.url} duration={200} />
              </ButtonBase>
            </Box>)}
          </Box>
          <IconButton color="primary" size="large" onClick={handleNextItemClick}><ArrowForwardIosIcon sx={{fontSize: {xs: 25, sm: 26, md: 30, lg: 32, xl: 35}}}/></IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default ImageModal