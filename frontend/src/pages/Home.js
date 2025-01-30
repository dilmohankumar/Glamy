import React, { useEffect, useState } from "react";
import "./home.css";
import authai from "../../src/assets/images/authai.svg";
import glob from "../../src/assets/images/glob.svg";
import three from "../../src/assets/images/three.svg";
import twentyseven from "../../src/assets/images/twentyseven.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [products1, setProducts1] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        if (Array.isArray(data) && data.length > 0 && data[0].products) {
          setProducts(data[0].products); // Set all products
          setProducts1(data[1].products);
        
        } else {
          console.error("No products found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });
  }, []);

  return (
   <>
          <div className="recommended-header1">
          <h1 className="header-title" style={{ margin: 0}}>Coldest Brands</h1>
           <div className="home-body-banner-arrow">
            View all
            <ArrowForwardIcon className="home-body-banner-arrow-icon" />
          </div>
        </div>
     {loading ? (
          <p>Loading products...</p>
        ) : products1 && products1.length > 0 ? (
          
          <div className="product-list0">
            {products1.map((product) => (
              <div key={product.id} className="product-card0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image0"
                />
                {/* <p className="product-brand"> {product.brand}</p> */}
                {/* <h2 className="product-name">{product.name}</h2> */}
                <p className="product-price0">
                  {/* Price: <span className="original-price">${product.price}</span>{" "} */}
                  {/* <span className="final-price">${product.final_price}</span> */}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No product available to display</p>
        )}
  
    <div className="home-container">
      <div className="welcome-section">
        <div className="welcome-header">
          <h1 className="header-title">About Glamy</h1>
          <div className="home-body-banner-arrow">
            View all
            <ArrowForwardIcon className="home-body-banner-arrow-icon" />
          </div>
        </div>

        <div className="features-list">
          <div className="feature-item">
            <img
              className="feature-image"
              src={authai}
              alt="Authenticated by Experts & AI"
            />
            <li className="feature-description">
              Authenticated by Experts & AI
            </li>
          </div>
          <div className="feature-item">
            <img className="feature-image" src={glob} alt="Global Sourcing" />
            <li className="feature-description">Global Sourcing</li>
          </div>
          <div className="feature-item">
            <img className="feature-image" src={three} alt="3-Day Returns" />
            <li className="feature-description">3-Day Returns</li>
          </div>
          <div className="feature-item">
            <img
              className="feature-image"
              src={twentyseven}
              alt="Customer Service"
            />
            <li className="feature-description">Customer Service</li>
          </div>
        </div>
      </div>

      <div className="recommended-section">
        <div className="recommended-header">
          <h1 className="header-title">Recommended</h1>
        </div>
        <div className="all-products">
          <div className="all-products-title" onClick={() => setFilter("All")}>
            All
          </div>
          <div className="product-item" onClick={() => setFilter("Adidas")}>
            Adidas
          </div>
          <div className="product-item" onClick={() => setFilter("Nike")}>
            Nike
          </div>
          <div className="product-item" onClick={() => setFilter("Gucci")}>
            Gucci
          </div>
        </div>
        {loading ? (
          <p>Loading products...</p>
        ) : products && products.length > 0 ? (
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <p className="product-brand"> {product.brand}</p>
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">
                  {/* Price: <span className="original-price">${product.price}</span>{" "} */}
                  <span className="final-price">${product.final_price}</span>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No product available to display</p>
        )}
      </div>
    </div> </>
  );
};

export default Home;
