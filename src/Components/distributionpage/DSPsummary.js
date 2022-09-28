import React from "react";
import Faq from "../faq/Faq";
import "./Distributionpage.css";
import SimpleAccordions from "./DSPaccordian";
const DSPsummary = () => {
  return (<>
    <section className="section_dsp">
      <div className="container">
        <h1 className="DSP_class_h1"> DSP Summary</h1>
        <p style={{ color: "#FFFFFF", marginTop: "3px", textAlign: "center" }}>
          Fames sed amet eget eget amet pretium.
        </p>
        <div>
        <SimpleAccordions/>
        </div>
      </div>
    </section>
        <div>
        <Faq />
        </div>
    </>);
};

export default DSPsummary;
