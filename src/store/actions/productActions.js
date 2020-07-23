import axios from 'axios';
import { PRODUCT_FETCHING, PRODUCT_FETCHED, PRODUCT_FETCHING_FAILED } from './actionTypes';

export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: PRODUCT_FETCHING });
    const { data } = await axios.get('/products');
    dispatch({ type: PRODUCT_FETCHED, payload: data.products });
};