import Cookie from 'js-cookie';
// import { useHistory } from 'react-router-dom';
// import { USER_LOGOUT_SUCCESS } from './../store/actions/actionTypes';
// import { useDispatch } from 'react-redux';

// const history = useHistory();
// const dispatch = useDispatch();

export const isAuthenticated = () => {
    // return if the user is authenticated  or not
    const isAuthenticated = Cookie.getJSON('user');
    console.log(isAuthenticated);
    // TODO: we will rely on store `auth` value, 
    // so need to figure out a way to ensure that auth value reflects with the changes
    //dispatch()
    return isAuthenticated;
};

export const isValidCookie = () => {
    // TODO:
    // check if the cookie is valid and hasn't expired with server
};

export const logout = () => {
    Cookie.remove('user');
    // dispatch({
    //   type: USER_LOGOUT_SUCCESS
    // });
    // history.push('/login');
}