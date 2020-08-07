import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGOUT_SUCCESS,
} from './../actions/actionTypes';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
        return {
            isLoading: true
        };
    case USER_LOGIN_SUCCESS:
      return {
        isLoading: false,
        auth: action.payload
      };
    case USER_LOGOUT_SUCCESS:
      return {
        isLoading: false,
        auth: null
      };  
    default:
      return state;
  }
};

export default authReducer;
