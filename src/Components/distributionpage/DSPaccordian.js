import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import aimage from "../assets/a1.png";
import "./Distributionpage.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { DSPdata } from "./DSPaccordiandata";
export default function SimpleAccordions() {
  const [AccodianData, setAccordianData] = useState(DSPdata);
  return (
    <div>
      {AccodianData.map((e) => {
        return (
          <>
            <Accordion
              style={{
                backgroundColor: "transparent",
                marginTop: "20px",
                border: "none",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <AiOutlineArrowDown
                    style={{ color: "#EE0979", fontSize: "35px" }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div className="a_image">
                    <img src={e.imageurl} alt="aimage" />
                    <div className="tempus">
                      <p className="mb-0 accodian_para">{e.des}</p>
                    </div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "white" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        );
      })}
    </div>
  );
}
