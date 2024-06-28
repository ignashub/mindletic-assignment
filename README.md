# Overview

This project is a survey application that allows users to log in, create surveys, submit survey responses, and view survey results. The application is built with a React frontend and a Laravel backend.

## Frontend

### Components

1. **LoginPage** (`src/components/LoginPage.js`)
    - Handles user login.
    - Sends a POST request to the `/login` endpoint with email and password.
    - On successful login, navigates to the survey results page.

2. **SurveyCreationForm** (`src/components/SurveyCreationForm.js`)
    - Allows users to create a new survey.
    - Users can add a title and multiple questions.
    - Sends a POST request to the `/surveys` endpoint with the survey details.

3. **SurveySubmissionForm** (`src/components/SurveySubmissionForm.js`)
    - Allows users to submit responses to a survey.
    - Displays a set of predefined questions.
    - Sends a POST request to the `/surveys/{survey}/responses` endpoint with the responses.

4. **SurveyResults** (`src/components/SurveyResults.js`)
    - Displays the results of a survey.
    - Fetches survey results from the `/surveys/{survey}/results` endpoint.
    - Aggregates and displays the results using a bar chart.

### Routes

- `/login`: Renders the `LoginPage` component.
- `/create-survey`: Renders the `SurveyCreationForm` component.
- `/submit-survey`: Renders the `SurveySubmissionForm` component.
- `/survey-results`: Renders the `SurveyResults` component.

## Backend

### Controllers

1. **AuthController** (`app/Http/Controllers/AuthController.php`)
    - Handles user authentication.
    - `login`: Validates user credentials and returns a success or failure response.

2. **SurveyController** (`app/Http/Controllers/SurveyController.php`)
    - Manages survey creation and retrieval.
    - `create`: Validates and creates a new survey.
    - `show`: Retrieves and returns survey results.

3. **SurveyResponseController** (`app/Http/Controllers/SurveyResponseController.php`)
    - Manages survey responses.
    - `store`: Validates and stores survey responses.

### Middleware

- **auth:sanctum**: Ensures that the user is authenticated.
- **role:admin**: Ensures that the user has an admin role.

### Models

1. **Survey** (`app/Models/Survey.php`)
    - Represents a survey.
    - Fields: `title`, `questions`.
    - Relationships: Has many `SurveyResponse`.

2. **SurveyResponse** (`app/Models/SurveyResponse.php`)
    - Represents a response to a survey.
    - Fields: `survey_id`, `responses`.
    - Relationships: Belongs to `Survey`.

### Routes

- **Public Routes**
    - `POST /login`: Authenticates the user.

- **Admin Routes** (Requires `auth:sanctum` and `role:admin` middleware)
    - `POST /surveys`: Creates a new survey.

- **Authenticated Routes** (Requires `auth:sanctum` middleware)
    - `POST /surveys/{survey}/responses`: Stores survey responses.
    - `GET /surveys/{survey}/results`: Retrieves survey results.


## Getting Started

- **npm install**: Installs frontend. Do it at the root folder.
- **npm start**: Starts the project.
- There is NO installation for backend. Only Models/Controllers/Routes schema
