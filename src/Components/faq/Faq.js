import React from "react";
import "./Faq.css";
import faq from "../assets/faq.png";
import icon from "../assets/icon.png";
import Accordiandata from "./Accordiandata";
import Faqs from "./Faqs";
const Faq = () => {
  return (
    <>
      <div className="container">
        <h1 className="faq_class_h1" style={{ color: "#3D2C56" }}>
          FAQ
        </h1>
        <p style={{ textAlign: "center", color: "#7E7E7E", fontSize: "20px" }}>
          Lacus, gravida nibh cras senectus egestas tempus purus. Sed velit
          ultrices faucibus sed risus.{" "}
        </p>
        <div className="row mutual_class  mt-5">
          <div className="col-md-4 col-sm-12">
            <div className="main_div">
              <div className="faq_image ">
                <img src={faq} alt="faq" />
              </div>
              <div className="icon_image">
                <img src={icon} alt="icon" />
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="row">
              <div className="col-md-12 col-sm-12 accordin_data">
                <Accordiandata />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
