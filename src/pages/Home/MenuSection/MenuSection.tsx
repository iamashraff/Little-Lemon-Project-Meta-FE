import React from "react";
import "./menusection.css";
import GreekSaladImage from "../../../assets/greeksalad.jpg";
import BruchettaImage from "../../../assets/bruchetta.jpg";
import LemonDessert from "../../../assets/lemondessert.jpg";
import ButtonMain from "../../../components/button/ButtonMain";
import FoodCard from "../../../components/foodcard/FoodCard";

const foodData = [
  {
    foodTitle: "Greek Salad",
    foodPrice: "12.99",
    foodImageUrl: GreekSaladImage,
    foodDescription:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    foodTitle: "Bruchetta",
    foodPrice: "5.99",
    foodImageUrl: BruchettaImage,
    foodDescription:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    foodTitle: "Lemon Dessert",
    foodPrice: "5.00",
    foodImageUrl: LemonDessert,
    foodDescription:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function MenuSection() {
  return (
    <section id="menu-section">
      <div id="container">
        <div className="column-1">
          <h1 id="menu-section-col1-h1">This week specials!</h1>
        </div>
        <div className="column-2">
          <ButtonMain id="online-menu-button">Online Menu</ButtonMain>
        </div>
      </div>
      <div id="menu-list">
        <div id="menu">
          {foodData.map((food, index) => (
            <FoodCard food={food} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
