import { useState } from 'react'
import { Box, Modal, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel';

import Image from 'mui-image'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: "70vh",
    maxWidth: "70vw",
    height: "auto",
    width: "auto",
    bgcolor: 'background.paper',
    border: '0px',
    boxShadow: 24,
    p: .25,
  };


const ProjectImageModal = ({ open, handleClose, data, currentIndex }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Carousel 
        indicators={true}
        navButtonsAlwaysInvisible={true}
        >
          {data && data.map((item, index) => <Box key={index} sx={{height: "auto"}}>
            <Image 
                src={item.url} 
                fit="scale-down"
                duration={800}
              />
          </Box>)}
      </Carousel>
        {/* {data && <Image src={data.url} duration={800}/>}
        <Typography>{currentIndex}</Typography> */}
      </Box>
    </Modal>
  )
}

export default ProjectImageModal