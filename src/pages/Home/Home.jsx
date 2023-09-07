import { useRef } from 'react'
import Contact from './Contact/Contact'

import DocumentHead from '../../components/DocumentHead'
import { Stack, Box } from '@mui/material'
import SubIntroduction from './SubIntroduction'
import Landing from './Landing/Landing'
import Projects from './Projects/Projects'
import About from './About/About'

const Home = () => {
  const subIntroRef = useRef();
  
  return (
    <Stack>
        <DocumentHead
          title="Paolo Bugarin | Home"
          description="I am a full stack web developer based in Los Angeles, California"
          keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
        />
        <Landing subIntroRef={subIntroRef}/>
        <Box sx={{mb: {xs:8, sm: 12, md: 14, lg: 18}}}></Box>
        <Box ref={subIntroRef}>
          <SubIntroduction/>
        </Box>
        <Projects/>
        <About/>
        <Contact/>
    </Stack>
  )
}

export default Home