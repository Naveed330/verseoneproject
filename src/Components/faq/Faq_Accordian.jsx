import React from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BiFile } from 'react-icons/bi'

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const Faq_Accordian = () => {
    return (
        <>
            <Accordion className='accordion-transparent-bg' sx={{ borderRadius: "16px" }}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Collapsible Group Item #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion className='accordion-transparent-bg' sx={{ padding: '0' }}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>Collapsible Group Item #1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <a href="https://verseone.net/knowledge-base/cover-art-must-not-contain-the-following/" target="_blank" rel="noopener noreferrer">
                                <BiFile />
                                Audio  File Requirement
                            </a>
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordion-transparent-bg'>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Collapsible Group Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <a href="https://verseone.net/knowledge-base/cover-art-must-not-contain-the-following/" target="_blank" rel="noopener noreferrer">
                        <BiFile />
                        Audio  File Requirement
                    </a>
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordion-transparent-bg' >
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Collapsible Group Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <a href="https://verseone.net/knowledge-base/cover-art-must-not-contain-the-following/" target="_blank" rel="noopener noreferrer">
                        <BiFile />
                        Audio  File Requirement
                    </a>
                </AccordionDetails>
            </Accordion>

        </>
    )
}

export default Faq_Accordian
