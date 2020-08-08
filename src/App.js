import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
//import { createStore, applyMiddleware, compose } from "redux";
//import thunk from 'redux-thunk';

import store from "./store";
import ProtectedRoute from "./Middleware/ProtectedRoute";

// import pages
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetailsPage";
// import OrderPage from './Pages/OrderPage';
import LoginPage from "./Pages/LoginPage";
// import SignUpPage from './Pages/SignUpPage';
// import CheckoutPage from './Pages/CheckoutPage';
// import CartPage from './Pages/CartPage';

// admin screens
// import OrderScreen from './Admin/OrderScreen';
import Dashboard from "./Admin/Dashboard";
import ProductList from "./Admin/Product/Index";
import AddProduct from "./Admin/Product/AddProduct";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
        {/* ADMIN ROUTES */}
          <ProtectedRoute path="/admin/dashboard">
            <Dashboard />
          </ProtectedRoute>
          <Route path="/admin/products/create">
            <AddProduct />
          </Route>
          <Route path="/admin/products">
            <ProductList />
          </Route>


          {/* PUBLIC ROUTES */}
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/" exact>
            <HomePage></HomePage>
          </Route>
          <Route path="/products/:id" exact>
            <HomePage></HomePage>
          </Route>

          {/* USER SPECIFIC ROUTES i.e: userOrder / Account / Portfolio page */}

        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
