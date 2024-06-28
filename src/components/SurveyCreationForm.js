import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const SurveyCreationForm = () => {
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState(['']);

    const handleAddQuestion = () => {
        setQuestions([...questions, '']);
    };

    const handleQuestionChange = (index, value) => {
        const newQuestions = [...questions];
        newQuestions[index] = value;
        setQuestions(newQuestions);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/surveys', { title, questions });
            console.log(response.data);
            // Optionally, navigate to another page or show a success message
        } catch (error) {
            console.error('Survey creation failed:', error.response.data);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Create Survey
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Survey Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                {questions.map((question, index) => (
                    <TextField
                        key={index}
                        label={`Question ${index + 1}`}
                        value={question}
                        onChange={(e) => handleQuestionChange(index, e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                ))}
                <Box mt={2}>
                    <Button variant="contained" color="primary" onClick={handleAddQuestion}>
                        Add Question
                    </Button>
                </Box>
                <Box mt={2}>
                    <Button type="submit" variant="contained" color="secondary">
                        Create Survey
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default SurveyCreationForm;