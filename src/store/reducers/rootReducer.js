import { combineReducers } from 'redux';
import productReducer from './ProductReducer';
import authReducer from './AuthReducer';

const rootReducer = combineReducers({
    products: productReducer,
    auth: authReducer,
});

export default rootReducer;