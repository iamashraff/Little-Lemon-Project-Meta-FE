import React from "react";
import Logo from "../../assets/Asset 14@4x-2.png";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div id="footer-container">
        <div>
          <img src={Logo} alt="Little Lemon Logo" width="180px" height="45px" />
        </div>
        <div>
          <p>Copyright © 2024 Little Lemon Inc.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
