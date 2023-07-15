import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Introduction from './Introduction/Introduction'
import Purpose from './Purpose/Purpose'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills'

import DocumentHead from '../../components/DocumentHead'
import useFirestoreActions from '../../hooks/useFirestoreActions'
import useRootRedux from '../../hooks/useRootRedux'
import useProjectsRedux from '../../hooks/useProjectsRedux'
import { Stack } from '@mui/material'
import Process from './Process/Process'
import SubIntroduction from './SubIntroduction'
import Works from './Works/Works'
import Landing from './Landing'
import Projects from './Projects/Projects'
import About from './About/About'

const Home = () => {
  const { skillsList, setData } = useRootRedux();
  const { projectsList } = useProjectsRedux();
  const { getDocumentFromCollection } = useFirestoreActions();
  const { pathname } = useLocation();

  console.log(projectsList)
  useEffect(() => {
    if(skillsList.length === 0){
      getDocumentFromCollection('user', 'information').then(data => setData(data))
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  
  return (
    <Stack px={{md: 2, lg: 2}}>
        <DocumentHead
          title="Paolo Bugarin | Home"
          description="I am a full stack web developer based in Los Angeles, California"
          keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
        />
        <Landing/>
        <SubIntroduction/>
        <Projects/>
        {/* <About/> */}

        {/* <Works/> */}
        {/* <Process/>
        <Skills/>
        <Purpose/> */}

        <Contact/>
    </Stack>
  )
}

export default Home