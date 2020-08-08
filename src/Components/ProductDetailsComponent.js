import React from "react";
import FrontendLayout from "../layouts/FrontendLayout";

export default function ProductDetailsPage({ product }) {
  // TWO WAY:
  // 1. either fetch from server(PROS-CONS: too much request, always updated data )
  // 2. Pass the selected product as props and view(SAFE WAY, LESS LOAD)
  return (
    <div className="ui two column grid">
      <div className="column">
        <div className="ui card fluid">
          <div className="image">
            <img src={product.image_url} />
          </div>
        </div>
      </div>
      <div className="ui column">
        <div className="ui three cards">
          <div className="ui card">
            <div className="image">
              <img src={product.image_url} />
            </div>
          </div>
          <div className="ui card">
            <div className="image">
              <img src={product.image_url} />
            </div>
          </div>
          <div className="ui card">
            <div className="image">
              <img src={product.image_url} />
            </div>
          </div>
        </div>

        <br />
        <br />
        <div className="ui sixteenth wide column">
          <div className="ui dividing header">Product Info</div>
        </div>
        <div className="ui padded two column grid">
          <div className="ui eight wide column">
            <span>Product: {product.title}</span>
            <br />
            <span>Price: ${product.price}</span>
            <br />
            <span>Rating: ({product.rating ? `${product.rating}/5` : `be the first to rate.`})</span>
            <br />
            <span>Vendor: {product.vendor || "Unknown"}</span>
            <br />
          </div>
          <div className="ui eight wide column">
            <div className="ui form">
              <div className="field">
                <input type="number" placeholder="Quantity" step="1" min="0" />
              </div>
              <div className="field">
                <button className="ui teal large fluid button">
                  <i className="cart plus icon" /> Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
