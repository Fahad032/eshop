import React from "react";
import { Link } from 'react-router-dom';
import AdminLayout from "./../../layouts/AdminLayout";

export default function index() {
  return (
    <AdminLayout>
      <div className="ui basic segment">
        <h1 className="ui left header">
            Products
        </h1>
        <div className="ui right floated">
            <Link to="/products/create" className="ui primary button">Add Product</Link>
        </div>
        <table className="ui celled striped teal table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>In Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10).keys()].map((i) => {
              return (
                <tr key={'key-'+i}>
                  <td>
                    <h4 className="ui image header">
                      <img
                        src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
                        className="ui massive rounded image"
                      />
                      <div className="content">
                        Product Title
                        <div className="sub header">Vendor</div>
                      </div>
                    </h4>
                  </td>
                  <td data-label="price">$24</td>
                  <td data-label="in stock">10</td>
                  <td>
                    <button className="ui primary icon button">
                      <i className="edit icon"></i>
                    </button>
                    <button className="ui negative icon button">
                      <i className="trash icon"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
