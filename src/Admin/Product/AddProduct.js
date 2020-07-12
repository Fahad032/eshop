import React from "react";
import { Link } from 'react-router-dom';
import AdminLayout from "./../../layouts/AdminLayout";

export default function AddProduct() {

  // TODO::  
  // Add product function that will call axios to the backend
  // Integrate Redux, thunk
  // Follow action, reducer flow  
  return (
    <AdminLayout>
      <div className="ui basic segment" style={{ marginTop: 50 }}>
        <h1> 
            New Product 
            <Link to="/products" className="ui gray button">Back</Link>
        </h1>
        <div className="ui form">
          <div className="field">
            <label>Product Name:</label>
            <input name="title" placeholder="Product title" />
          </div>
          <div className="field">
            <label>Price:</label>
            <input name="price" placeholder="10" />
          </div>
          <div className="field">
            <label>In Stock:</label>
            <input name="stock" placeholder="200" />
          </div>
          <div className="field">
            <label>Product Image:</label>
            <input
              type="file"
              name="product-image"
              placeholder="Upload Image"
            />
          </div>
          <div className="field">
              <button className="ui primary button">Save</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
