import React from "react";
import "./Footer.css";
import footer from "../assets/footericon.png";
import tt from "../assets/footerone.png";
import ttt from "../assets/footertwo.png";
import tttt from "../assets/footerthree.png";
import ttttt from "../assets/footerfour.png";
const Footer = () => {
  return (
    <section className="footer_secton">
      <div className="container">
        <div className="footer_whole_main mt-5">
          <div className="social_main_div">
            <div className="footer_image">
              <img src={footer} alt="footer" />
            </div>
            <div className="social">
              <img src={tt} alt="tt" />
              <img src={ttt} alt="tt" />
              <img src={tttt} alt="tt" />
              <img src={ttttt} alt="tt" />
            </div>
          </div>

          <div className="home_content">
            <div>
              <h5 style={{ color: "#EE0979" }}>Home</h5>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>Privacy Policy</p>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>Terms and Conditions</p>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>FAQs</p>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>News</p>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>Brand Guide</p>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>Contact Us</p>
            </div>

            <div>
              <h5 style={{ color: "#EE0979" }}>Service</h5>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>Music Video Services</p>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>DSP Profile Update</p>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>Music Distribution</p>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>Music Analytics</p>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>Affiliate Program</p>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>A & R Network</p>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>GoAsia</p>
            </div>

            <div>
              <h5 style={{ color: "#EE0979" }}>Knowledge Base</h5>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>How Youtube Content ID works</p>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>Mechanical Royalties</p>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>Performance Royalties</p>
              <p style={{ color: "#F9EBD4", fontSize:"15px", fontWeight:"300" }}>Publisher vs. Songwriter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
