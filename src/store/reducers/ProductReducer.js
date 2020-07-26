import {
  PRODUCT_FETCHING,
  PRODUCT_FETCHED,
  PRODUCT_FETCHING_FAILED,
  CREATE_PRODUCT_REQUEST, 
  CREATE_PRODUCT_ERROR, 
  CREATE_PRODUCT_SUCCESS 
} from "./../actions/actionTypes";

const productReducer = function (state = [], action) {
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
      }

    default:
      return state;
  }
};

export default productReducer;
