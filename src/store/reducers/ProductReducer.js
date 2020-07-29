import {
  PRODUCT_FETCHING,
  PRODUCT_FETCHED,
  PRODUCT_FETCHING_FAILED,
  CREATE_PRODUCT_REQUEST, 
  CREATE_PRODUCT_ERROR, 
  CREATE_PRODUCT_SUCCESS, 
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS
} from "./../actions/actionTypes";

const productReducer = function (state = [], action) {
  // TODO: Error Handling
  switch (action.type) {
    case PRODUCT_FETCHING:
      return {
        isLoading: true,
        products: [],
      };
    case PRODUCT_FETCHED:
      return {
        isLoading: false,
        products: action.payload,
      };

    case CREATE_PRODUCT_REQUEST:
      return {
        isLoading: true
      };

    case CREATE_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        product: action.payload,
      };

    case UPDATE_PRODUCT_REQUEST:
      return {
        isLoading: true
      };
      
    case UPDATE_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        products: action.payload
      };

    case DELETE_PRODUCT_REQUEST: 
      return {
        isLoading: true,
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        products: action.payload
      };

    default:
      return state;
  }
};

export default productReducer;
