import React from "react";
import "./nav.css";
const Infombar = () => {
  return (
    <>
      <div className="infoparent">
        {/* logo div begin */}
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        {/* logo div end */}

        <div className="number">
          <p>
            <i class="fa-solid fa-phone"></i>
          </p>
          <h3>+234(0)8032279851 <br /> Call customer care</h3>
        </div>
        <div className="email">
          <p>
            <i class="fa-solid fa-envelope"></i>
          </p>
          <p>Write us <br /> spoc.nigeria@arravo.co</p>
        </div>
        <div className="location">
        <p><i class="fa-solid fa-location-dot"></i></p>
          <p>33 Oyinkan Abayomi Drive,<br /> Ikoyi, Lagos, Nigeria.</p>
        </div>
        <div className="search">
          <p><i class="fa-solid fa-magnifying-glass"></i></p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Infombar;
