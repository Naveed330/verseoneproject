import React from "react";
import "./Services.css";
import "./Ui.css"
function Servicess() {
  return (
    <>
      <div className="service-div">
        <div className="container">
          <p className="ui-content" style={{ fontSize: "60px" }}>
            Our Services
          </p>
        </div>
      </div>
      <div className="sec-2">
        <div className="container">
          <p className="services-main-heading">
            Background<br></br>
            We are like you
          </p>
          <p className="sec2-line">
            Music royalties are payments that are paid to recording artists,
            songwriters, composers,<br></br>
            publishers, and other copyright holders for the right to use their
            intellectual property. There are<br></br>
            copyright laws that give artists these exclusive rights to their
            musical and performance works.
          </p>

          <p className="sec2-line pb-5">
            Music Royalties are also generated for various types of licensing
            and usage. The types of music<br></br>
            royalties include mechanical, public performance, synchronization,
            and print music. Most<br></br>
            musicians depend on these royalties as payments from the music
            industry. Moreover, contracts<br></br>
            define music royalty agreements between the creator and Verse One.
          </p>
        </div>
      </div>
      <div className="round-main mt-5">
        <div className="round1 ">Our <br></br>Services</div>
      </div>

      <div className="round-main">
        <div className="round2">Smart link generation</div>
      </div>
      <div className="round3-main">
        <div className="round2">
          {" "}
          <div className="round2">Smart link generation</div>
        </div>
        <div className="round2">Custom label naming</div>
      </div>

      <div className="round3-main" id="row3">
        <div className="round2" style={{ padding: "10px" }}>
          The choice for you<br></br>
          to add (for free) multiple artists to one account (which means less
          commission per person)
        </div>
        <div className="round2">Beatport distribution (for edm artists)</div>
        <div className="round2" id="bubble3">
          YouTube content id monetization
        </div>
      </div>

      <div className="round3-main" id="row4">
        <div
          className="round2"
          style={{ fontSize: "15px", padding: "0px 5px" }}
        >
          Monthly payouts (upon meeting a $50 threshold){" "}
        </div>
        <div className="round2">Editorial playlist pitching</div>
        <div className="round2">
          Pre-order link setup (for iTunes, Spotify, and Amazon)
        </div>
        <div className="round2">Lyric distribution and monetization</div>
      </div>
      <div className="round3-main" id="row5">
        <div
          className="round2"
          style={{ fontSize: "15px", padding: "0px 5px" }}
        >
          Monthly revenue reports{" "}
        </div>
        <div className="round2">
          Over 280 streaming platforms across 190 plus countries
        </div>
        <div className="round2">Free ISRC codes</div>
        <div className="round2">Free UPC codes</div>
        <div className="round2">Delivery within 48 hours</div>
      </div>
    </>
  );
}

export default Servicess;
