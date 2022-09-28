import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { data } from "./Servicescards";
import "./Ourservice.css";
const Ourservice = () => {
  const [Data, setData] = useState(data);
  return (
    <div className="container-fluid">
      <h1 className="our_services" style={{color:"#3D2C56"}}>Our Services</h1>
      <p style={{ textAlign: "center", color: "#7E7E7E", fontSize:"20px" }}>
        Fames sed amet eget eget amet pretium.
      </p>
      <div className="row">
        {Data.map((e) => {
          return (
            <>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <Card style={{ width: "100%", border: "none" }}>
                  <Card.Body>
                    <div>
                      <div className="image_path">
                        <img src={e.imagepath} alt="" />
                      </div>
                      <p style={{ textAlign: "center", marginTop: "5px", fontSize:"20px", fontWeight:"bold" }}>
                        {e.title}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Ourservice;
