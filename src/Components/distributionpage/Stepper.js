import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./Distributionpage.css";
import singup from "../assets/singup.png";
import approval from "../assets/approval.png";
import contract from "../assets/contract.png";
import account from "../assets/account.png";
import music from "../assets/music.png";
const steps = [
  {
    imageUrl: singup,
    label: "Sing Up",
    description: `Artist fills an application Form to join VerseOne Distribution.`,
  },
  {
    imageUrl: approval,
    label: "Approval",
    description:
      "Onboarding Team checks and approves or declines the application.",
  },
  {
    imageUrl: contract,
    label: "Contract",
    description:
      "After approval an online distribution contract is sent to artist/label for e-signing.",
  },
  {
    imageUrl: account,
    label: "Account",
    description:
      "After contract is signed, an account is created for the artist/label and a welcome emails is sent containing login details.",
  },
  {
    imageUrl: music,
    label: "Music Upload",
    description:
      "With the login details artist/label uploads his music to our platform for distribution to DSPSs",
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  console.log("activeStep", activeStep);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{width:"100%", maxWidth: 300 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          
            
            
          <Step key={step.label}>
            <div className="step_whole_mutual">
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption"></Typography>
                  ) : null
                }
              >
                <div className="step_image" style={{display:"flex", alignItems:"center"}} >
                  <img src={step.imageUrl} alt="" />
                  <h5 style={{ color: "#EE0979", fontWeight:"bold" }}> {step.label}</h5>
                </div>
                {/* <div>hello</div> */}
              <StepContent>
                <Typography style={{ color: "#7E7E7E" }}>
                  {step.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
              </StepLabel>
            </div>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
