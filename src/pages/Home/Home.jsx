import { useEffect } from 'react'
import Introduction from './Introduction/Introduction'
import Purpose from './Purpose/Purpose'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills'
import Footer from '../../components/Footer'

import DocumentHead from '../../components/DocumentHead'
import useFirestoreActions from '../../hooks/useFirestoreActions'
import useRootRedux from '../../hooks/useRootRedux'
import { Box, Stack } from '@mui/material'
import Process from './Process/Process'

const Home = () => {
  const { skillsList, setData } = useRootRedux();
  const { getDocumentFromCollection } = useFirestoreActions();

  
  useEffect(() => {
    if(skillsList.length === 0){
      getDocumentFromCollection('user', 'information').then(data => setData(data))
    }
  }, [])

  return (
    <Stack>
        <DocumentHead
          title="Paolo Bugarin | Home"
          description="I am a full stack web developer based in Los Angeles, California"
          keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
        />
        <Introduction/>
        <Purpose/>
        <Process/>
        <Skills/>
        <Contact/>
        <Footer/>
    </Stack>
  )
}

export default Home