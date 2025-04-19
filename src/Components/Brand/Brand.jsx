import React from "react";
import "./Brand.css";
import acoustic from "../../assets/acoustic.jpg";
import bass from "../../assets/bass.jpg";
import classical from "../../assets/classical.jpg";
import electric from "../../assets/electric.jpg";
import hollow from "../../assets/hollow body.jpg";
import ukulele from "../../assets/ukulele.jpg";

const Brand = () => {
  return (
    <>
      <div className="brands">
        <div className="brand">
          <img src={acoustic} alt="" />
          <div className="caption">
            <p>Acoustic Guitar</p>
          </div>
        </div>
        <div className="brand">
          <img src={bass} alt="" />
          <div className="caption">
            <p>Bass Guitar</p>
          </div>
        </div>
        <div className="brand">
          <img src={classical} alt="" />
          <div className="caption">
            <p>Classical Guitar</p>
          </div>
        </div>
      </div>
      <div className="brands">
        <div className="brand">
          <img src={electric} alt="" />
          <div className="caption">
            <p>Electric Guitar</p>
          </div>
        </div>
        <div className="brand">
          <img src={hollow} alt="" />
          <div className="caption">
            <p>Hollow-Body Guitar</p>
          </div>
        </div>
        <div className="brand">
          <img src={ukulele} alt="" />
          <div className="caption">
            <p>Ukulele Guitar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
