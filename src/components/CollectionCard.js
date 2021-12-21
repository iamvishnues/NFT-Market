import React from "react";
import "./CollectionCard.css";
function CollectionCard({ id, name, image, traits }) {
  return (
    <div className="collectionCard">
      <img src={image} />
      <div className="name">{name}</div>
      <div className="id">.#{id}</div>
      <div className="priceContainer">
        <img
          className="ethLogo"
          src="https://lh3.googleusercontent.com/u/0/d/1a6dJ_N6O-IHzldoqSDpvIjuZQgrlq_mO=w1920-h830-iv1"
        />
        <div className="price">{traits[0]?.value}</div>
      </div>
    </div>
  );
}

export default CollectionCard;
