import React, { useState, useEffect } from "react";
import FrontendLayout from "../layouts/FrontendLayout";
import { fetchProducts } from "./../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsComponent from "./../Components/ProductDetailsComponent";


export default function HomePage() {

  const [product, setProduct] = useState({}); // for showing product details
  const [displayMode, setDisplayMode] = useState(false);
  const { isLoading, products } = useSelector(state => state.products);
  const dispatch = useDispatch();
  

  const viewProductDetails = (product) => {
    setDisplayMode(true);
    setProduct(product);
  };


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <FrontendLayout>
      {/* Main Content */}
       { !isLoading && !displayMode && <div className="ui four stackable cards">
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
                  <button className="ui button purple" onClick={() => viewProductDetails(product)} >Shop Item</button>
                </div>
              </div>
            );
          })}
        </div> }
    
        { displayMode && <ProductDetailsComponent product={product}></ProductDetailsComponent> }
    </FrontendLayout>
  );
}
