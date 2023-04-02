import { useEffect} from 'react'
import { Box } from '@mui/material'
import Introduction from './Introduction/Introduction'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills'
import Footer from '../../components/Footer'

// import { useDocument } from '../../hooks/useDocuments'
import { useAppContext } from '../../hooks/useAppContext'
import useFirestoreActions from '../../hooks/useFirestoreActions'

const Home = () => {
  const { skillsList, dispatch } = useAppContext();
  const { getDocumentFromCollection } = useFirestoreActions();

  useEffect(() => {
    if(skillsList.length === 0){
      getDocumentFromCollection('user', 'information').then(data => dispatch({ type: 'SET_SKILLS', payload: data.skills }))
    }
  }, [])
  console.log(skillsList)
  return (
    <Box sx={{pt: 8, height: "100vh", overflowX: "hidden"}}>
        <Introduction/>
        <Skills/>
        <Contact/>
        <Footer/>
    </Box>
  )
}

export default Home