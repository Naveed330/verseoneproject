import React from "react";
import You from "../assets/You.png";
import row1 from "../assets/row1.png";
import logo from "../assets/logo .png";
import row2 from "../assets/row2-1.png";
import hm from "../assets/hm.png";
import arrow from "../assets/row2-2.png";
import game from "../assets/game.png";
import row3 from "../assets/row3.png";
import pr from "../assets/pr.png";
import "./Publish.css"
import ApplyPublish from "./ApplyPublish";
function Publishing() {
  return (
    <>
      <div className="service-div">
        <div className="container">
          <p className="publish-content">Music Publishing Administration</p>
        </div>
      </div>
      <div className="sec-2">
        <div className="container">
          <p className="services-main-heading">
            Digital Music<br></br>
            Publishing Administration
          </p>
          <p className="sec2-line">
            Digital Music Publishing Administration<br></br>
            Most Musicians only make money from tickets sales when they tour.
            However, If your music is<br></br>
            being distributed, performed worldwide, and you don’t have a
            publishing deal, your royalties<br></br>
            are sitting in collection societies around the world waiting to be
            claimed by you.
          </p>

          <p className="sec2-line pb-5">
            Collecting these royalties by yourself will require direct
            relationships with each society in each<br></br>
            territory. Doing this takes time, paperwork, and a lot of upfront
            fees. Worst of all, if you don’t<br></br>
            register in time to collect your royalties, the collection societies
            will retain the royalties and you<br></br>
            will miss out on additional revenue. Verse One Publishing will help
            you collect your royalties and<br></br>
            send them to you.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            id="publish-grid"
            style={{ backgroundColor: "#F5F5F5" }}
          >
            <div className="row1">
              <img src={You} alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" id="publish-grid">
            <div className="row1">
              <img style={{ width: "100%" }} src={row1} alt="" />
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12"
            id="publish-grid"
            style={{ backgroundColor: "#F5F5F5" }}
          >
            <div className="row1">
              <img style={{ width: "100%" }} src={logo} alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" id="publish-grid">
            <div className="row1">
              <img className="row-img" src={row2} alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" id="publish-grid">
            <div className="row1">
              <img style={{ width: "100%" }} src={hm} alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 " id="publish-grid">
            <div className="row1">
              <img className="row2-img" src={arrow} alt="" />
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            id="publish-grid"
            style={{ backgroundColor: "#F5F5F5" }}
          >
            <div className="row1">
              <img style={{ width: "100%" }} src={game} alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" id="publish-grid">
            <div className="row1">
              <img style={{ width: "100%" }} src={row3} alt="" />
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            id="publish-grid"
            style={{ backgroundColor: "#F5F5F5" }}
          >
            <div className="row1">
              <img style={{ width: "100%" }} src={pr} alt="" />
            </div>
          </div>
        </div>
      </div>
        <ApplyPublish/>
    </>
  );
}

export default Publishing;
