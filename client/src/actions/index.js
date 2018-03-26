import axios from 'axios';
import { FETCH_USER } from './types';

//reduxThunk looks for function actions
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};
