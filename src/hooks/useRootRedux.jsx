import { useSelector, useDispatch } from 'react-redux';
import { rootActions } from '../redux/reducers/rootSlice';
import { getImageKeys } from '../redux/reducers/rootReducers';

const useRootRedux = () => {
  const dispatch = useDispatch();
  const rootRedux = useSelector(state => state.root)

  if(rootRedux) {
    return {
      ...rootRedux,
      setData: (data) => dispatch(rootActions.setData(data)),
      getImageKeys: () => dispatch(getImageKeys()),
    }
  } else {
    throw Error('Error accessing root reducer.');
  }
}

export default useRootRedux