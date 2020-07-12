import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import pages
import HomePage from "./Pages/HomePage";
// import ProductDetails from './Pages/ProductDetailsPage';
// import OrderPage from './Pages/OrderPage';
// import LoginPage from './Pages/LoginPage';
// import SignUpPage from './Pages/SignUpPage';
// import CheckoutPage from './Pages/CheckoutPage';
// import CartPage from './Pages/CartPage';

// admin screens
// import OrderScreen from './Admin/OrderScreen';
import Dashboard from "./Admin/Dashboard";
import ProductList from './Admin/Product/index';
import AddProduct from './Admin/Product/AddProduct';


export default function App() {
  return (
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
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
