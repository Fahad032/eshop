import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "./../../store/actions/productActions";
import AdminLayout from "../../layouts/AdminLayout";

export default function AddProduct() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [productImage, setProductImage] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", productImage);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("stock", stock);

    dispatch(addProduct(formData));
  }

  function handleUpload(e) {
    // TODO: add validation / try formik
    // handle file data
    setProductImage(e.target.files[0]);
  }

  return (
    <AdminLayout>
      <div className="ui basic segment" style={{ marginTop: 50 }}>
        <h1>
          New Product
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
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Product title"
              />
            </div>
            <div className="field">
              <label>Price:</label>
              <input
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="10"
              />
            </div>
            <div className="field">
              <label>In Stock:</label>
              <input
                name="stock"
                placeholder="200"
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
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
              <button className="ui primary button" onClick={handleSubmit}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
