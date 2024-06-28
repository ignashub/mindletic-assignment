import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage';
import SurveyCreationForm from './components/SurveyCreationForm';
import SurveySubmissionForm from './components/SurveySubmissionForm';
import SurveyResults from './components/SurveyResults';

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/create-survey" element={<SurveyCreationForm />} />
                <Route path="/submit-survey" element={<SurveySubmissionForm />} />
                <Route path="/survey-results" element={<SurveyResults />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </>
    );
};

export default App;