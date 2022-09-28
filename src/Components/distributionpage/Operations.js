import React from "react";
import "./Distributionpage.css";
import dist from "../assets/dist.png"
import VerticalLinearStepper from "./Stepper";
const Operations = () => {
  return (
    <section>
      <div className="container mt-4">
        <h1 className="Operation_h1">Operation Protocol</h1>
        <p style={{ color: "#7E7E7E", marginTop: "3px", textAlign: "center" }}>
          Fames sed amet eget eget amet pretium
        </p>

        <div className="stepper_class">
        <VerticalLinearStepper/>
        </div>

        <div className="dist_img">
          <img src={dist} alt="dist" />
        </div>
      </div>
    </section>
  );
};

export default Operations;
