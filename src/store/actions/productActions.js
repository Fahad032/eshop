import axios from 'axios';
import { 
    PRODUCT_FETCHING, 
    PRODUCT_FETCHED, 
    // PRODUCT_FETCHING_FAILED,

    CREATE_PRODUCT_REQUEST, 
    // CREATE_PRODUCT_ERROR, 
    CREATE_PRODUCT_SUCCESS 
} from './actionTypes';


export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: PRODUCT_FETCHING });
    const { data } = await axios.get('/api/products');
    // console.log(data);
    dispatch({ type: PRODUCT_FETCHED, payload: data.products });
};

export const addProduct = (productData) => async (dispatch) => {
    dispatch({type: CREATE_PRODUCT_REQUEST, payload: productData });
    console.log(productData);
    const { data } = await axios.post('/api/products/create', productData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }    
    });
    console.log(data);
    dispatch({type: CREATE_PRODUCT_SUCCESS, payload: data.products });
};
