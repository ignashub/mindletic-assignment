import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const SurveySubmissionForm = () => {
    const [responses, setResponses] = useState(['', '', '', '']); //not dynamic

    const handleResponseChange = (index, value) => {
        const newResponses = [...responses];
        newResponses[index] = value;
        setResponses(newResponses);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const surveyId = 1; // Replace with the actual survey ID
            const response = await axios.post(`/surveys/${surveyId}/responses`, { responses });
            console.log(response.data);
            // Optionally, navigate to another page or show a success message
        } catch (error) {
            console.error('Survey submission failed:', error.response.data);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Submit Survey
            </Typography>
            <form onSubmit={handleSubmit}>
                {['Rate the quality of the consultation (1-5)', 'Rate the professionalism of the psychologist (1-5)', 'Rate your overall satisfaction with the service (1-5)', 'Additional comments'].map((question, index) => (
                    <TextField
                        key={index}
                        label={question}
                        value={responses[index]}
                        onChange={(e) => handleResponseChange(index, e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                ))}
                <Box mt={2}>
                    <Button type="submit" variant="contained" color="secondary">
                        Submit Survey
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default SurveySubmissionForm;