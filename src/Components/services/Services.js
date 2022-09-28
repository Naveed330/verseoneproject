import React, { useState } from "react";
import "./Services.css";
import Card from "react-bootstrap/Card";
import { Data } from "./Servicesdata";
import {servicedata} from "./Servicesimg"
const Services = () => {
  const [services, setServices] = useState(Data);
  const [servicedatas,setServicedatas]=useState(servicedata)
  return (
    <div className="container-fluid">
      <marquee behavior="" direction="left">
        <div className="row cards_div">
          {services.map((e, index) => {
            return (
              <>
                <div className="col-lg-3 col-md-3 col-sm-3 col-3 card_column">
                  <Card
                    style={{ width: "100%", padding: "20px 0px" }}
                    className="card_class_col"
                  >
                    <Card.Body>
                      <div key={e.id} className="image_url">
                        <img className="social_images" src={e.imageurl} alt="" />
                      </div>
                    </Card.Body>
                  </Card>
                  <hr style={{ color: "3px solid white" }} />
                </div>
              </>
            );
          })}
        </div>
      </marquee>
      <marquee behavior="" direction="right">
        <div className="row cards_div">
          {servicedatas.map((e, index) => {
            return (
              <>
                   <div className="col-lg-3 col-md-3 col-sm-3 col-3 card_column">
                  <Card
                    style={{ width: "100%", padding: "20px 0px" }}
                    className="card_class_col"
                  >
                    <Card.Body>
                      <div key={e.id} className="image_url">
                        <img src={e.imageurl} alt="" />
                      </div>
                    </Card.Body>
                  </Card>
                  <hr style={{ color: "3px solid white" }} />
                </div>
              </>
            );
          })}
        </div>
      </marquee>
    </div>
  );
};

export default Services;
