import React from 'react'
import Carousel from 'react-material-ui-carousel';
import Image from 'mui-image';
import { Stack, Button, Box } from '@mui/material';


const ImageCarousel = ({ imagesList }) => {

  return (
    <Box sx={{width: "100%", height: "100%"}}>
      <Carousel 
        indicators={false}
        navButtonsAlwaysInvisible={true}
      >
        {imagesList.map((item, index) => (
          <Box 
            key={index} 
            sx={{height: "auto", cursor: "pointer", position: "relative"}} 
            // onClick={() => setShowModal({ isVisible: true, data: imagesList, currentIndex: index })}
          >
            <Box sx={{position: "absolute", top: 0, left: 0, zIndex: 2}}>{index}</Box> 
            <Image 
              src={item.url} 
              fit="scale-down"
              duration={800}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default ImageCarousel