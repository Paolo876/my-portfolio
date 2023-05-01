import React from 'react';
import { NavLink, Link as ReactLink } from 'react-router-dom';

import { Modal, Box, Typography, Link, Container, IconButton, Fade } from '@mui/material'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const styles = {
  height: "100%",
  width: "100%",
  background: "rgba(35,35,35,0.99)",
}


const LinksModal = ({ open, onClose}) => {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Fade in={open} timeout={{enter: 600, exit: 600, appear: 1000}}>

      <Box sx={styles}>
        <Container maxWidth="xl">
            <Box sx={{display: "flex", flexDirection: "row", px:{xs:0, sm:1.5, lg: 1.5, xl: 3 }, py:{xs:.65, sm:1.15, md: 1.75, xl: 2 }, alignItems: "center"}}>
              <Link component={ReactLink} to="/">
                <Typography fontSize={{xs: 14, sm: 15, md: 16}} variant="h3">PB</Typography>
              </Link>
              <IconButton sx={{display: {md:"none"}, ml: "auto", opacity: .75}} size="small" color="primary" onClick={onClose}>
                <PanoramaFishEyeIcon/>
              </IconButton>
            </Box>
        </Container>
      </Box>
      </Fade>
    </Modal>
  )
}

export default LinksModal