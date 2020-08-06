import Cookie from 'js-cookie';
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
} from './actionTypes';
import axios from 'axios';


export const login = (credentials) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post('/api/login', credentials);

    Cookie.set('user', JSON.stringify(data.user));
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
};