import React from "react";
import "./Faqtwo.css";
import group from "../assets/Group.png";
const Contactus = () => {
  return (
    <section className="faq_section">
      <div className="container">
        <div className="group_img_class">
          <div className="questions">
            <h1>Do you still have any questions?</h1>
            <div className="contactus_btn">
              <button>Contact Us</button>
            </div>
          </div>

          <div className="group_img">
            <img src={group} alt="group" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
