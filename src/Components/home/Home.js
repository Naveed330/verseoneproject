import React from "react";
import Faq from "../faq/Faq";
import Map from "../map/Map";
import Ourservice from "../Ourservies/Ourservice";
import Royal from "../royalties/Royal";
import Services from "../services/Services";
import "./Home.css";
const Home = () => {
  return (
    <>
      <section className="section_home_page">
        <div className="hello_div">
          <div className="container">
            <div className="smart_digital">
              <h1 className="h1_tag">
                Smart
                <span className="digital">
                  Digital
                </span>
                <span style={{ color: "#EE0979" }}>Distribution.</span>
              </h1>
              <div className="verse_btn">
                <button>Join VerseOne</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Services />
      </div>
      <div>
        <Ourservice />
      </div>
      <div>
        <Royal />
      </div>
      <div>
        <Map />
      </div>
      <div>
        <Faq />
      </div>
    </>
  );
};

export default Home;
