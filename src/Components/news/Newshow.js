import React from "react";
import "./News.css";
import { Images } from "./Newsarray";
import { AiOutlineArrowRight} from "react-icons/ai";
import Card from "react-bootstrap/Card";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import snap from "../assets/nwes-snap.png";
import { BiSearch } from "react-icons/bi";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

function Newshome() {
  const Navigate = useNavigate();
  const readmorebtn = () => {
    Navigate("/News");
  };
  return (
    <>
      <section style={{marginTop:"40px"}}>
        <Breadcrumb className="bread-crumbs">
          <Breadcrumb.Item
            active
            className="BREAD-ITEM"
            href="#"
            style={{ color: " #EE0979" }}
          >
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="BREAD-ITEM" href="" style={{color:" #555555"}}>
            News
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="container">
          <h1 className="main-news-heading mt-5">News</h1>
          <div className="musical-news">
            <h1 className="main-news"> Read our latest news</h1>
            <div className="div-input">
              <span className="span-icon">
                <BiSearch
                  className=""
                  style={{ fontSize: "20px", marginLeft: "10px" }}
                />
              </span>
              <input className="search" placeholder="Search" />
            </div>
          </div>
          <div className="MAIN-NEWS-DIV">
            <div className="row" id="sec-nwes1">
              <div className="col-lg-6 col-md-6 col-sm-12 card-grid">
                <Card
                  className="card-grid"
                  style={{
                    width: "100%",
                   
                    border: "none",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="c-text" id="c-text" >
                      New musical festival<br></br> start now!!!
                    </Card.Title>
                    <Card.Text className="c-paragraph mt-5">
                      As a result of musical works being spread worldwide like
                      mustard seeds, it’s important to know where the seed fell,
                      whether is germinated or died and why it died.
                    </Card.Text>
                    <div className="card-div mt-5">
                      <div className="d-flex gap-3 flex-wrap">
                        <p className="c-data">
                          <p>19/08/2022</p>
                        </p>
                        <p className="c-data">
                          <p>by Thaïs Parvez</p>
                        </p>
                      </div>
                      <div>
                        <button onClick={readmorebtn} className="c-data mt-1">
                          <p>Read now</p>
                          <AiOutlineArrowRight className="c-data mb-2" />
                        </button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={snap}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="card-main">
            {Images.map((value, index) => {
              return (
                <>
                  <Card
                    className="card-width"
                    key={index}
                    style={{ width: "35rem",border:"none"}}
                  >
                    <Card.Img variant="top" src={value.imgae} />
                    <Card.Body>
                      <Card.Title className="card-text">
                        {value.text}
                      </Card.Title>
                      <Card.Text className="card-paragraph">
                        {value.paragraph}
                      </Card.Text>
                      <div className="card-div">
                        <div className="d-flex gap-3 flex-wrap">
                          {" "}
                          <p className="card-data">{value.date}</p>
                          <p className="card-data">{value.name}</p>
                        </div>
                        <div className="">
                          <button className="card-data d-flex gap-2" style={{color:"#EE0979"}} onClick={readmorebtn}>
                            
                            {value.btn}
                            <AiOutlineArrowRight className="card-data mt-2" style={{color:"#EE0979"}}/>
                          </button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
        <div className="pagination-div">
          <Pagination />
        </div>
      </section>
    </>
  );
}

export default Newshome;
