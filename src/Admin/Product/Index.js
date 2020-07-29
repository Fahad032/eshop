import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
// import EditProduct from "./EditProduct";
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
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [updatedImage, setUpdatedImage] = useState({});
  const [editMode, setEditMode] = useState(false);

  const editProduct = (product) => {
    setProduct(product);
    setTitle(product.title);
    setPrice(product.price);
    setStock(product.stock);
    setEditMode(true);
  };

  // Probably in diff component
  const handleUpload = (e) => {
    const image = e.target.files[0];
    setUpdatedImage(image);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...product,
      title: title,
      price: price,
      stock: stock,
    };
    const formData = new FormData();
    formData.append('image', updatedImage);

    for(let key in updatedProduct){
      formData.append(key, updatedProduct[key]);
    }

    dispatch(updateProduct(formData, products));
    setEditMode(isLoading);
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
            <Link to="/products/create" className="ui primary button">
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

      {/* TRY product && <EditProduct product={product} /> */}

      {/** EDIT PRODUCT */}

      {product && editMode && (
        <div className="ui basic segment" style={{ marginTop: 50 }}>
          <h1>
            Edit Product
            <Link to="/products" className="ui gray button">
              Back
            </Link>
          </h1>
          <div className="ui form">
            <form>
              <div className="field">
                <label>Product Name:</label>
                <input
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Product title"
                />
              </div>
              <div className="field">
                <label>Price:</label>
                <input
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="10"
                />
              </div>
              <div className="field">
                <label>In Stock:</label>
                <input
                  name="stock"
                  value={stock}
                  placeholder="200"
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>

              <img src={product.image_url} alt={product.title} />
              <div className="field">
                <label>Product Image:</label>
                <input
                  type="file"
                  name="product-image"
                  placeholder="Upload Image"
                  onChange={handleUpload}
                />
              </div>
              <div className="field">
                <button className="ui primary button" onClick={handleUpdate}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
