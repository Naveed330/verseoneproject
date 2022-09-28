import React from "react";
import "./Faqtwo.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Contactus from "./Contactus";
const Faqtwo = () => {
  return (<>
    <section>
      <div className="container mt-3">
        <div>
          <Breadcrumb style={{ textDecoration: "none" }}>
            <Breadcrumb.Item
              active
              href="#"
              style={{ color: "#EE0979", fontWeight: "500", fontSize: "20px" }}
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              active
              style={{ fontWeight: "500", fontSize: "20px" }}
              href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
            >
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item
              active
              style={{ fontWeight: "500", fontSize: "20px" }}
            >
              Data
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div>
          <p className="Lacus">
            Lacus, gravida nibh cras ultrices faucibus sed risus?
          </p>
        </div>

        <div className="faq2_text">
          <p style={{ textAlign: "center" }}>
            Creators can’t upload or distribute music directly to Spotify or
            other DSPs (online stores) like Tidal, Amazon Music, Pandora,
            Kanjian, Tencent or similar ones. If you’re an artist, and want to
            get your music to the most important digital stores like Spotify,
            Apple Music or YouTube Music, you’d need a music distributor or
            aggregator to do so.If you’re a record label or digital music
            distributor company, you can use SonoSuite's white-label platform to
            manage your catalog and distribute it to the world's leading DSPs.
          </p>
        </div>

      </div>
    </section>
        <div>
            <Contactus/>
        </div>
        </>);
};

export default Faqtwo;
