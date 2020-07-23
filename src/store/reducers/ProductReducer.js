import {
  PRODUCT_FETCHING,
  PRODUCT_FETCHED,
  PRODUCT_FETCHING_FAILED,
} from "./../actions/actionTypes";

const productReducer = function (state, action) {
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
    default:
      return state;
  }
};

export default productReducer;
