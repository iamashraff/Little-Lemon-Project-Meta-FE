import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonMain from "../../../components/button/ButtonMain";
import "./mainsection.css";
import MainSectionImage from "../../../assets/menu1.jpg";

function MainSection() {
  const navigate = useNavigate();
  const handleNavigateReservation = () => {
    navigate("/reservations");
  };
  return (
    <section id="main-section">
      <div id="container">
        <div className="column-1">
          <span>
            <h1 id="restaurant-name-h1">Little Lemon</h1>
            <p id="restaurant-name-p">Chicago</p>
            <p id="restaurant-description">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <ButtonMain id="reserve-button" onClick={handleNavigateReservation}>
              Reserve a Table
            </ButtonMain>
          </span>
        </div>
        <div className="column-2">
          <img
            id="main-section-image"
            src={MainSectionImage}
            alt="Main Section Image"
            width="430px"
            height="280px"
          />
        </div>
      </div>
    </section>
  );
}

export default MainSection;
