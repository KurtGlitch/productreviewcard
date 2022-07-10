import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./card.css";

function Card() {
  return (
    <div className="container"><div className="card">
      <img className="currentImage" alt="perfume" />
      <div className="card-text-content">
        <h3 className="smalltitle capsAll">Perfume</h3>
        <h1 className="capsFirstWord title">Gabrielle essence eau de parfum</h1>
        <p className="description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="price-div">
          <h1 className="price inline">$149.99</h1>
          <h1 className="description stroke inline">$169.99</h1>
        </div>
        <div className="button">
          <AiOutlineShoppingCart size="1.5rem" />
          <p className="button-text inline">Add to Cart</p>
        </div>
      </div>
    </div></div>
    
  );
}

export default Card;
