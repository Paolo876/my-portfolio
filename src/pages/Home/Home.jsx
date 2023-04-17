import { useEffect } from 'react'
import Introduction from './Introduction/Introduction'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills'
import Footer from '../../components/Footer'
import DocumentHead from '../../components/DocumentHead'
import useFirestoreActions from '../../hooks/useFirestoreActions'
import useRootRedux from '../../hooks/useRootRedux'
import { Box } from '@mui/material'

const Home = () => {
  const { skillsList, setData } = useRootRedux();
  const { getDocumentFromCollection } = useFirestoreActions();

  
  useEffect(() => {
    if(skillsList.length === 0){
      getDocumentFromCollection('user', 'information').then(data => setData(data))
    }
  }, [])

  return (
    <Box sx={{pt: 0, height: "100vh", overflowX: "hidden"}}>
        <DocumentHead
          title="Paolo Bugarin | Home"
          description="I am a full stack web developer based in Los Angeles, California"
          keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
        />
        <Introduction/>
        <Skills/>
        <Contact/>
        <Footer/>
    </Box>
  )
}

export default Home