import React from "react";

// import pages
import HomePage from './Pages/HomePage';
import ProductDetails from './Pages/ProductDetailsPage';
import OrderPage from './Pages/OrderPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import CheckoutPage from './Pages/CheckoutPage';
import CartPage from './Pages/CartPage';

// admin screens
import OrderScreen from './Admin/OrderScreen';
import Dashboard from './Admin/Dashboard';

export default function App() {
  return (<Dashboard />);
}
