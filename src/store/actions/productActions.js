import axios from "axios";
import {
  PRODUCT_FETCHING,
  PRODUCT_FETCHED,
  // PRODUCT_FETCHING_FAILED,
  CREATE_PRODUCT_REQUEST,
  // CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  // DELETE_PRODUCT_ERROR,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  // UPDATE_PRODUCT_ERROR
} from "./actionTypes";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCT_FETCHING });
  const { data } = await axios.get("/api/products");
  // console.log(data);
  dispatch({ type: PRODUCT_FETCHED, payload: data.products });
};

export const addProduct = (productData) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_REQUEST, payload: productData });
  console.log(productData);
  const { data } = await axios.post("/api/products/create", productData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(data);
  dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data.products });
};

export const updateProduct = (formData, products) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });

  const productId = formData.get("_id");
  const { data } = await axios.put("/api/product/" + productId, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const oldProduct = products.find((item) => item._id === productId);
  const productIndex = products.indexOf(oldProduct);

  products.splice(productIndex, 1, data.product);

  dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: products });
};

export const removeProduct = (product, products) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST, payload: product });
  const { data } = await axios.delete("/api/products/" + product._id);

  const filteredProducts = products.filter((item) => {
    console.log(product, item);
    return item._id != product._id;
  });

  dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: filteredProducts });
};
