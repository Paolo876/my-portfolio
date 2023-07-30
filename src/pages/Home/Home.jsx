import Contact from './Contact/Contact'

import DocumentHead from '../../components/DocumentHead'
import { Stack } from '@mui/material'
import SubIntroduction from './SubIntroduction'
import Landing from './Landing'
import Projects from './Projects/Projects'
import About from './About/About'

const Home = () => {

  
  return (
    <Stack>
        <DocumentHead
          title="Paolo Bugarin | Home"
          description="I am a full stack web developer based in Los Angeles, California"
          keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
        />
        <Landing/>
        <SubIntroduction/>
        <Projects/>
        <About/>
        <Contact/>
    </Stack>
  )
}

export default Home