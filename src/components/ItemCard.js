import React from "react";

function ItemCard({ title, price, img }) {
  const estilo = {
    margin: "140px",
    color: "white",
    background: "black",
  };

  return (
    <div style={estilo}>
      <img src={img} alt="img"></img>
      <h1>{title}</h1>
      <p>{price}</p>
    </div>
  );
}

export default ItemCard;
