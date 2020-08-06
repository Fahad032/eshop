import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function EditProduct({ product, handleUpdate, cancelEdit }) {
  // EDIT PRODUCT
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [updatedImage, setUpdatedImage] = useState({});

  useEffect(() => {
    if (product) {
      setTitle(product.title || "");
      setPrice(product.price || 0);
      setStock(product.stock || 0);
    }
  }, [product]);

  const handleUpload = (e) => {
    const image = e.target.files[0];
    setUpdatedImage(image);
  };

  const update = (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...product,
      title: title,
      price: price,
      stock: stock,
    };
    const formData = new FormData();
    formData.append("image", updatedImage);

    for (let key in updatedProduct) {
      formData.append(key, updatedProduct[key]);
    }
    // calling parent handleUpdate
    handleUpdate(formData);
  };

  return (
    <div className="ui basic segment" style={{ marginTop: 50 }}>
      <h1>
        Edit Product
        <button className="ui gray button" onClick={cancelEdit}>
          Back
        </button>
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
            <button className="ui primary button" onClick={update}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

EditProduct.propTypes = {
    product: PropTypes.object.isRequired
}

export default EditProduct;
