import React from "react";
import ButtonDelivery from "../button/ButtonDelivery";
import "./foodcard.css";

function FoodCard({ index, food }: any) {
  return (
    <div id="food-card">
      <article key={index}>
        <img src={food?.foodImageUrl} alt={`Menu ${index + 1}`} />
        <span>
          <h3>{food?.foodTitle}</h3>
          <h3>{food?.foodPrice}</h3>
        </span>
        <p>{food?.foodDescription}</p>
        <span>
          <ButtonDelivery>Order Delivery</ButtonDelivery>
        </span>
      </article>
    </div>
  );
}

export default FoodCard;
