import React from "react";
import { Link } from "react-router-dom"; // import Link for routing

const categories = [
  {
    name: "Watch",
    products: "12 Products",
    img: "https://m.media-amazon.com/images/G/31/img21/Watches2025/May/PremiumStore/Men/Multiclick/The_Watchlist_Final2._CB794031169_UC343,180_.png",
  },
  {
    name: "Fashionable",
    products: "8 Products",
    img: "https://down-ph.img.susercontent.com/file/e37b7117bcd15bc585ce4f788a8c6a34",
  },
  {
    name: "Ethnic Wear",
    products: "6 Products",
    img: "https://tse2.mm.bing.net/th/id/OIP.C7AoxSqZsrcd2_9LmEs5wAHaJ2?cb=12&w=660&h=878&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Goggles",
    products: "10 Products",
    img: "https://tse1.mm.bing.net/th/id/OIP.DGf1w5gzXdGeS-FCJ5PQkQHaEj?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Side Bag",
    products: "4 Products",
    img: "https://tse2.mm.bing.net/th/id/OIP.nw_F-OsrI4GepcXxRmBnRwHaI4?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Shoes",
    products: "5 Products",
    img: "https://tse3.mm.bing.net/th/id/OIP.UGFdpLPDJqKMWN5Bl-KdtQHaFo?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const Categories = () => {
  return (
    <div className="categories-section">
      <h2 className="title">Best For Your Categories</h2>
      <p className="subtitle">
        Match items that go well together and stay trendy in modern fashion.
      </p>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <Link
             to="/Collection" 
            className="category-card"
            key={index}
          >
            <div className="image-container">
              <img src={cat.img} alt={cat.name} />
            </div>
            <h3>{cat.name}</h3>
            <p>{cat.products}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
