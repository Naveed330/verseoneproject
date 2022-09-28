import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Faq.css";
import Arrow from "../assets/downarrow.png";
import { AiOutlineArrowDown } from "react-icons/ai";
export default function SimpleAccordion() {
  return (
    <div>
      <Accordion className="accordian_class">
        <AccordionSummary
          expandIcon={
            <AiOutlineArrowDown
              style={{ fontSize: "25px", color: "#EE0979" }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontWeight: "bold", color:"#3D2C56", fontSize:"22px" }}>
            Lacus, gravida nibh cras ultrices faucibus sed risus?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordian_class">
        <AccordionSummary
          expandIcon={
            <AiOutlineArrowDown
              style={{ fontSize: "25px", color: "#EE0979" }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ fontWeight: "bold", color:"#3D2C56", fontSize:"22px" }}>
            Sed velit ultrices faucibus sed risus?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordian_class">
        <AccordionSummary
          expandIcon={
            <AiOutlineArrowDown
              style={{ fontSize: "25px", color: "#EE0979" }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ fontWeight: "bold", color:"#3D2C56", fontSize:"22px" }}>
            Lacus, gravida nibh cras senectus egestas tempus?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordian_class">
        <AccordionSummary
          expandIcon={
            <AiOutlineArrowDown
              style={{ fontSize: "25px", color: "#EE0979" }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ fontWeight: "bold", color:"#3D2C56", fontSize:"22px" }}>
            Lacus, gravida nibh velit ultrices faucibus sed risus?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
