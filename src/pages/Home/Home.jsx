import React from 'react'
import { Box } from '@mui/material'
import Introduction from './Introduction/Introduction'
import Services from './Services/Services'
import Contact from './Contact/Contact'


const Home = () => {
  return (
    <Box sx={{pt: 8, height: "100vh", overflowX: "hidden"}}>
      <Box  sx={{}}>
        <Introduction/>
        <Services/>
        <Contact/>
      </Box>
    </Box>
  )
}

export default Home