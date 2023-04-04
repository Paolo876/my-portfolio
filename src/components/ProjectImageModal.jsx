import { useState } from 'react'
import { Box, Modal } from '@mui/material'
import Image from 'mui-image'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: "70vh",
    maxWidth: "70vw",
    bgcolor: 'background.paper',
    border: '0px',
    boxShadow: 24,
    p: .25,
  };


const ProjectImageModal = ({ open, handleClose, data }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {data && <Image src={data.url} duration={800}/>}
      </Box>
    </Modal>
  )
}

export default ProjectImageModal