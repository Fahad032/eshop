import React, { useState, useEffect } from "react";
import FrontendLayout from "../layouts/FrontendLayout";
import { fetchProducts } from "./../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage() {

  const { isLoading, products } = useSelector(state => state.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <FrontendLayout>
      {/* Main Content */}
       { !isLoading && <div className="ui four stackable cards">
          {products && products.map((product) => {
            return (
              <div className="ui card" key={product._id}>
                <div className="image">
                  <img src={product.image_url} />
                </div>
                <div className="content">
                  <div className="header">{product.title}</div>
                  <div className="description">Price: ${product.price}</div>
                </div>
                <div className="extra content">
                  <button className="ui button basic">Shop Item</button>
                </div>
              </div>
            );
          })}
        </div> }
    </FrontendLayout>
  );
}
