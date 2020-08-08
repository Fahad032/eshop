import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import EditProduct from "./EditProduct";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProducts,
  updateProduct,
  removeProduct,
} from "./../../store/actions/productActions";

export default function Index() {
  // PRODUCT LISTING
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const { isLoading, products } = productList;

  // EDIT PRODUCT
  const [product, setProduct] = useState({});
  const [editMode, setEditMode] = useState(false);

  const editProduct = (product) => {
    setProduct(product);
    setEditMode(true);
  };

  const handleUpdate = (data) => {
    dispatch(updateProduct(data, products));
    setEditMode(isLoading);
    setProduct({});
  };

  const cancelEdit = () => {
    setEditMode(false);
  };

  const deleteProduct = async (product) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(removeProduct(product, products));
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <AdminLayout>
      {!editMode && (
        <div
          className={
            isLoading ? "ui basic segment loading" : "ui basic segment"
          }
        >
          <h1 className="ui left header">Products</h1>
          <div className="ui right floated">
            <Link to="/admin/products/create" className="ui primary button">
              Add Product
            </Link>
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
              {products && products.length ? (
                products.map((product, i) => {
                  return (
                    <tr key={"key-" + i}>
                      <td>
                        <h4 className="ui image header">
                          <img
                            alt={product.title}
                            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
                            className="ui massive rounded image"
                          />
                          <div className="content">
                            {product.title}
                            <div className="sub header">{product.vendor}</div>
                          </div>
                        </h4>
                      </td>
                      <td data-label="price">${product.price}</td>
                      <td data-label="in stock">{product.stock}</td>
                      <td>
                        <button
                          className="ui primary icon button"
                          onClick={() => editProduct(product)}
                        >
                          <i className="edit icon"></i>
                        </button>
                        <button
                          className="ui negative icon button"
                          onClick={() => {
                            deleteProduct(product);
                          }}
                        >
                          <i className="trash icon"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>
                    <h4 className="ui image header"> No product found! </h4>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/** EDIT PRODUCT */}
      {editMode && (
        <EditProduct
          product={product}
          handleUpdate={handleUpdate}
          cancelEdit={cancelEdit}
        />
      )}
    </AdminLayout>
  );
}
