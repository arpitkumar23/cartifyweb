import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../contect/ShopContext";
import "../css/Title.css";
import RelatedData from "../Contexts/RelatedData";
import toast from "react-hot-toast";

const Products = () => {
  const { id } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  useEffect(() => {
    const foundProduct = products.find((item) => item._id === id);
    setProduct(foundProduct || null);
    if (foundProduct) {
      setSelectedImage(foundProduct.image[0]);
      setQuantity(1);
      setSelectedSize(null);
    }
  }, [id, products]);

  if (!product) {
    return <h2 className="not-found">Product not found</h2>;
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast.error("Please select a size before buying ✅");
      return;
    }
    toast.success(`Proceeding to checkout with ${product.name} (${selectedSize}) ✅`);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart ✅");
      return;
    }
    addToCart(id, selectedSize);
    toast.success(`${product.name} (${selectedSize}) added to cart ✅`);
  };

  return (
    <div className="product-page">
      <div className="product-details-container">
        <div className="product-images">
          <img src={ selectedImage } alt={ product.name } className="main-image" />
          <div className="thumbnail-row">
            { product.image.map((img, i) => (
              <img
                key={ i }
                src={ img }
                alt={ `thumb-${i}` }
                className={ `thumbnail ${selectedImage === img ? "active" : ""}` }
                onClick={ () => setSelectedImage(img) }
              />
            )) }
          </div>
        </div>

        <div className="product-info">
          <h2 className="product-title">{ product.name }</h2>
          <p className="product-price">
            { currency } { product.price }
          </p>

          { product.size && product.size.length > 0 && (
            <div className="size-selector">
              <h4>Select Size:</h4>
              <div className="sizes">
                { product.size.map((size, index) => (
                  <button
                    key={ index }
                    className={ `size-btn ${selectedSize === size ? "active" : ""}` }
                    onClick={ () => setSelectedSize(size) }
                  >
                    { size }
                  </button>
                )) }
              </div>
            </div>
          ) }

          <p className="product-desc">{ product.description }</p>

          <div className="quantity-box">
            <button onClick={ () => setQuantity((q) => Math.max(1, q - 1)) }>-</button>
            <span>{ quantity }</span>
            <button onClick={ () => setQuantity((q) => q + 1) }>+</button>
          </div>
          <div className="btn-group">
            <button onClick={ handleAddToCart }>Add to Cart</button>

          </div>

          <div className="extra-info">
            <h4>Delivery Options 🚚</h4>
            <p>✔ Free Delivery on orders above ₹500</p>
            <p>✔ Cash on Delivery Available</p>
            <p>✔ 7 Days Easy Return</p>
          </div>
        </div>
      </div>

      <div className="related-section">
        <RelatedData
          category={ product.category }
          subCategory={ product.subCategory }
          currentId={ product._id }
        />
      </div>
    </div>
  );
};

export default Products;
