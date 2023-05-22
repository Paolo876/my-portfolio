import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Introduction from './Introduction/Introduction'
import Purpose from './Purpose/Purpose'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills'

import DocumentHead from '../../components/DocumentHead'
import useFirestoreActions from '../../hooks/useFirestoreActions'
import useRootRedux from '../../hooks/useRootRedux'
import { Stack } from '@mui/material'
import Process from './Process/Process'
import SubIntroduction from './SubIntroduction'
import Works from './Works/Works'

const Home = () => {
  const { skillsList, setData } = useRootRedux();
  const { getDocumentFromCollection } = useFirestoreActions();
  const { pathname } = useLocation();

  
  useEffect(() => {
    if(skillsList.length === 0){
      getDocumentFromCollection('user', 'information').then(data => setData(data))
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  
  return (
    <Stack>
        <DocumentHead
          title="Paolo Bugarin | Home"
          description="I am a full stack web developer based in Los Angeles, California"
          keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
        />
        <Introduction/>
        <SubIntroduction/>
        <Works/>
        <Process/>
        <Skills/>
        <Purpose/>

        <Contact/>
        {/* <Footer/> */}
    </Stack>
  )
}

export default Home