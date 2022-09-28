import React from "react";
import dis from "../assets/dis.png";
import "../distrubution/Distribution.css";
import "../distributionpage/Distributionpage.css";
import videoimage from "../assets/videoimage.png"
import Operations from "./Operations";
import DSPsummary from "./DSPsummary";
import Application from "../application/Application";
const Distributionpage = () => {
  return (
    <>
      <section className="distribution_class">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="h1_div">
                <h1 className="h1_Digital">
                  Digital music <br /> business made easy
                </h1>
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "32px",
                    color: "white",
                  }}
                >
                  In enim sed scelerisque diam nunc, dignissim elit non morbi.
                  Eros, et ultrices magna tortor lacinia convallis amet id.
                  Lacus, gravida nibh cras senectus egestas tempus purus. Sed
                  velit ultrices faucibus sed risus.
                </p>
                <div className="start_btn">
                  <button>Let’s Start</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="dis_image">
                <img src={dis} alt="dis" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h1 className="video_title">Video Title</h1>
        <p style={{color:"#7E7E7E", marginTop:"3px", textAlign:"center" }} >Fames sed amet eget eget amet pretium</p>
      </div>
    
    {/* Video Tag in Distribution Page */}
      <div>
        <div className="videoimage" >
            {/* <video src="#"></video> */}
            <img src={videoimage} alt="videoimage" />
        </div>
      </div>
      {/* Operational pages */}
      <div>
        <Operations/>
      </div>
      {/* DSP Summary */}
      <div>
        <DSPsummary/>
      </div>
      <div>
        <Application/>
      </div>
    </>
  );
};

export default Distributionpage;
