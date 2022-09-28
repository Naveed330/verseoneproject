import React from "react";
import "./Operation.css";
const Operation = () => {
  return (
    <>
      <section className="opertion_class_section">
        <div className="container">
          <h1 style={{ color: "white", textAlign: "center" }}>
            Operation protocol
          </h1>
          <p style={{ color: "white", textAlign: "center" }}>
            Fames sed amet eget eget amet pretium.
          </p>

          <div className="main_div_operation">
            <div className="account">
              <h3>3</h3>
              <h5>Accounts</h5>
            </div>
            <div className="accountone">
              <h3>4</h3>
              <h5 style={{ textAlign: "center" }}>Music Uploads</h5>
            </div>
            <div className="accounttwo">
              <h3>2</h3>
              <h5 style={{ textAlign: "center" }}>Music Uploads</h5>
            </div>
            <div className="accountthree">
              <h3>1</h3>
              <h5 style={{ textAlign: "center" }}>Music Uploads</h5>
            </div>
            <div className="accountfour">
              <h4 style={{ textAlign: "center" }}>How do it works?</h4>
            </div>
            <div className="accountfive">
              <h3>4</h3>
              <h5 style={{ textAlign: "center" }}>Music Uploads</h5>
            </div>
          </div>
          <div className="padding_div"></div>
        </div>
      </section>
    </>
  );
};

export default Operation;
