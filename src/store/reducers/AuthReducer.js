import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
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
    default:
      return state;
  }
};

export default authReducer;
