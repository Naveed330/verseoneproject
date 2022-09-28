import React from "react";
import "./Faq.css";
import FaqImg from "../assets/Faqs-container-img.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Faq_Accordian from "./Faq_Accordian";
import Faq_Cards from "./Faq_Cards";
import Faqtwo from "../faqtwo/Faqtwo";
const Faqs = () => {
  const accordianData = [
    {
      heading: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
      description: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
    },
    {
      heading: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
      description: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
    },
    {
      heading: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
      description: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
    },
    {
      heading: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
      description: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
    },
    {
      heading: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
      description: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
    },
    {
      heading: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
      description: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
    },
    {
      heading: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
      description: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
    },
    {
      heading: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
      description: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
    },
    {
      heading: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
      description: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
    },
    {
      heading: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
      description: "Lacus, gravida nibh cras ultrices faucibus sed risus?",
    },
  ];

  return (
    <>
      <div className="faq_container">
        <div className="faq_container-text">
          <div className="faq_container-text-heading">
            Do you have any questions?
          </div>
          <div className="faq_container-text-description">
            In enim sed scelerisque diam nunc, dignissim elit non morbi. Eros,
            et ultrices magna tortor lacinia convallis amet id. Lacus, gravida
            nibh cras senectus egestas
          </div>
          <div className="faq_container-input">
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
        <div className="faq_container-img">
          <img src={FaqImg} width="100%" alt="FaqImg" srcSet={FaqImg} />
        </div>
      </div>
      <marquee attribute_name="attribute_value" direction="right" attributes>
        <div className="faq_marquee-container">
          <div className="marquee-item">
            <h1>
              Lacus, gravida nibh cras <br /> ultrices faucibus sed risus?
            </h1>
          </div>
          <div className="marquee-item">
            <h1>
              Lacus, gravida nibh cras <br /> ultrices faucibus sed risus?
            </h1>
          </div>
          <div className="marquee-item">
            <h1>
              Lacus, gravida nibh cras <br /> ultrices faucibus sed risus?
            </h1>
          </div>
        </div>
      </marquee>
      <marquee
        attribute_name="attribute_value"
        direction="left"
        style={{ marginTop: "-6px" }}
        attributes
      >
        <div className="faq_marquee-container">
          <div className="marquee-item">
            <h1>
              Lacus, gravida nibh cras <br /> ultrices faucibus sed risus?
            </h1>
          </div>
          <div className="marquee-item">
            <h1>
              Lacus, gravida nibh cras <br /> ultrices faucibus sed risus?
            </h1>
          </div>
          <div className="marquee-item">
            <h1>
              Lacus, gravida nibh cras <br /> ultrices faucibus sed risus?
            </h1>
          </div>
        </div>
      </marquee>

      <div className="faq_card-container">
        <Faq_Cards />
        <Faq_Cards />
        <Faq_Cards />
        <Faq_Cards />
        <Faq_Cards />
        <Faq_Cards />
        <Faq_Cards />
      </div>

      <div className="faq_container" style={{ flexDirection: "column" }}>
        {accordianData.map((item, index) => {
          return (
            <div className="accordion-container">
              <Accordion
                sx={{
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                  borderRadius: "16px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ArrowForwardIcon sx={{ color: "#EE0979 " }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="accordian-text-heading">
                    {item.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian-text-description">
                    {item.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>
      <div>
        <Faqtwo/>
      </div>
    </>
  );
};

export default Faqs;
