import React from 'react'
import DocumentHead from '../../components/DocumentHead'
import Footer from '../../components/Footer'

import { Stack, Box } from '@mui/material'
import ContactContainer from './ContactContainer'

const Contact = () => {
  return (
    <Stack sx={{height: "100%", pt: {xs: 10, md:18}, overflowX: "hidden", overflowY: "auto"}}>
      <DocumentHead
        title="Paolo Bugarin | Contact"
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      <ContactContainer/>
      <Box sx={{flex: 1, ml: "auto", opacity: .5}}>
        <Footer/>

      </Box>
    </Stack>
  )
}

export default Contact