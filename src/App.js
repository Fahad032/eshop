import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
// import pages
// import HomePage from "./Pages/HomePage";
// import ProductDetails from './Pages/ProductDetailsPage';
// import OrderPage from './Pages/OrderPage';
// import LoginPage from './Pages/LoginPage';
// import SignUpPage from './Pages/SignUpPage';
// import CheckoutPage from './Pages/CheckoutPage';
// import CartPage from './Pages/CartPage';

// admin screens
// import OrderScreen from './Admin/OrderScreen';
import Dashboard from "./Admin/Dashboard";
import ProductList from "./Admin/Product/Index";
import AddProduct from "./Admin/Product/AddProduct";

export default function App() {


  // dummy actions
  // PRODUCT_FETCHING
  // PRODUCT_FETCHED
  // PRODUCT_FETCHING_FAILED
  const productsReducer = function(state = {products: []}, action){
    switch( action.type ){
      case 'PRODUCT_FETCHING':
        return {
          isLoading: true,
          products: [],
        };
      case 'PRODUCT_FETCHED':
        return {
          isLoading: false,
          products: action.payload
        };
      default:
        return state;  
    }
  }

  // full application state
  const reducer = combineReducers({
    products: productsReducer
  });


  const initialState = {
    products: []
  };

  const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(reducer, initialState, composeEnhancer(
    applyMiddleware(thunk)
  ));


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/product/create">
            <AddProduct />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          {/* <Route path="/" exact>
          <HomePage></HomePage>
        </Route> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
