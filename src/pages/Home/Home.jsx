import React from 'react'
import { Box } from '@mui/material'
import Introduction from './Introduction/Introduction'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills'
import Footer from '../../components/Footer'


const Home = () => {
  return (
    <Box sx={{pt: 8, height: "100vh", overflowX: "hidden"}}>
      <Box>
        <Introduction/>
        <Skills/>
        <Contact/>
        <Footer/>
      </Box>
    </Box>
  )
}

export default Home