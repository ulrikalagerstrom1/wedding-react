import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material';

const QA = () => (
    <div>
        <Typography variant="h4" gutterBottom>
            Frequently Asked Questions
        </Typography>

        <Accordion>
            {/*<AccordionSummary expandIcon={<ExpandMoreIcon />}>*/}
            <AccordionSummary>
                <Typography>What is the dress code?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Formal attire. Please check the dress code section for more
                    details.</Typography>
            </AccordionDetails>
        </Accordion>

        {/* Add more Q&A items here */}
    </div>
);

export default QA;
