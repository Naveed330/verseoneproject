import React from "react";
import "./Distribution.css";
import dis from "../assets/dis.png";
import Faq from "../faq/Faq";
import Operation from "../operation/Operation";

const Distribution = () => {
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
              <Operation/>
            </div>
      <div>
        <Faq />
      </div>
    </>
  );
};

export default Distribution;
