import { useState } from 'react'
import DocumentHead from '../../components/DocumentHead'

import { Box, Grid, Typography } from '@mui/material'
import ContactForm from './ContactForm'
import ContactDescription from './ContactDescription'
import FormSuccess from './FormSuccess'

const Contact = () => {
  const [ success, setSuccess ] = useState(true);
  return (
    <Box
      sx={{
        position: "relative", 
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        pt: {xs:10, sm: 12, md: 13, lg: 10, xl: 10}, 
        height: {lg:"100vh"},
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflowX: "hidden"
      }}
    >      
      <DocumentHead
        title="Paolo Bugarin | Contact"
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      <Grid container 
        sx={{
          justifyContent: "space-between", 
          alignItems: "flex-start", 
          maxWidth: "1500px", 
          mx: "auto",
          height: "80%"
        }}
      >   
        <Grid item xs={12} lg={5.25} xl={5.5} sx={{display: "flex", flexDirection: "column", height: {md: "auto", lg:"100%"}}} mb={{xs: 1.5, sm: 4, lg: 0}}>
          <ContactDescription/>
        </Grid>
        <Grid item xs={12} lg={6} xl={5}>
          {!success && <ContactForm setSuccess={setSuccess} success={success}/>}
          {success && <FormSuccess/>}
        </Grid>
        <Box mt={{xl: 5}}>
        <Typography
          variant="body2"
          align="right"
          sx={{
            fontSize: {xs: 10.5, sm:11, md: 11, lg:12, xl: 12}, 
            opacity: .5, 
            mixBlendMode: "difference", 
          }}
        >© 2023 Paolo Bugarin, All rights reserved.</Typography>
      </Box>
      </Grid>
    </Box>
  )
}

export default Contact