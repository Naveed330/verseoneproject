import React from "react";
// import "./Application.css";
import application from "../assets/application.png";
import Form from "../application/Form";
import "../application/Application.css";
import Application from "../application/Application";
export const ApplyPublish = () => {
  return (
    <>
      <div className="application-div mt-5">
        <div className="application-pic  d-flex align-items-center">
          <div className="container">
            <p className="application-heading">Apply for Publishing </p>
            <p className="application-content">
              Let us deliver your music and music videos to the most important
              <br></br>
              digital music stores and DSPs, including VEVO, Amazon, iTunes, and{" "}
              <br></br>
              Tidal, Shazam, Google Music, Spotify and 280+ stores. You upload
              <br></br>
              once, and we’ll deliver it everywhere starting at 0$. No
              middle-men,<br></br>
              no annual fees or recurring debits to your bank card. Please
              refer,<br></br>
              to our terms of Service for specific details.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="content">
          Application Form for Digital Music Distribution
        </p>
        <p className="line-content">
          Each application to VerseOne Distribution will be carefully reviewed
          by our onboarding team.<br></br>
          Complete the form below as accurately as possible.
        </p>
        <Form />
      </div>
      {/* <Application/> */}

      {/* <div className="container">
        <p className="content">
          Application Form for Digital Music Publishing
        </p>
        <p className="line-content">
          Each application to VerseOne Publishing will be carefully reviewed
          by our onboarding team.<br></br>
          Complete the form below as accurately as possible.
        </p>
        <Form />
      </div> */}
    </>
  );
}

// export default ApplyPublish;
