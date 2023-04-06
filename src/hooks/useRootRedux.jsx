import { useSelector, useDispatch } from 'react-redux';
import { rootActions } from '../redux/reducers/rootSlice';

const useRootRedux = () => {
  const dispatch = useDispatch();
  const rootRedux = useSelector(state => state.root)


  if(rootRedux) {
    return {
    ...rootRedux,
    setSkills: (data) => dispatch(rootActions.setSkills(data)),
    }
  } else {
    throw Error('Error accessing root reducer.');
  }
}

export default useRootRedux