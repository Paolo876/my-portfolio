import { useSelector, useDispatch } from 'react-redux';
import { projectsActions } from '../redux/reducers/projectsSlice';


const useProjectsRedux = () => {
    const dispatch = useDispatch();
    const projectsRedux = useSelector(state => state.projects)
  
    if(projectsRedux) {
      return {
      ...projectsRedux,
      setCurrentInView: (data) => dispatch(projectsActions.setCurrentInView(data)),
      }
    } else {
      throw Error('Error accessing projects reducer.');
    }
}

export default useProjectsRedux