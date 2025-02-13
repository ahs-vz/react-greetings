# React Greetings App

## Overview
This project is a simple **React (frontend)** application with **Express (backend)** that provides random greetings. The frontend is deployed on [Vercel](https://vercel.com/), and the backend is deployed on [Render](https://render.com/).

## Live Demo
- **Frontend:** [https://react-greetings-frontend.vercel.app](https://react-greetings-frontend.vercel.app)
- **Backend:** [https://react-greetings-backend.onrender.com/api/greeting](https://react-greetings-backend.onrender.com/api/greeting)

## Project Structure
- `frontend`: Contains the React frontend application.
- `backend`: Contains the backend Express server.

## Requirements
- Node.js (version 14.x or higher)
- npm (version 6.x or higher) or yarn
- nvm (Node Version Manager) is recommended for managing Node.js versions

**Note:** This project was built using Node.js version v18.20.6 and npm version 7.24.2.

## Setup Instructions

### Cloning the Repository
1. Clone the repository:
    ```sh
    git clone https://github.com/ahs-vz/react-greetings.git
    cd react-greetings
    ```

## Running the Application Locally

### Backend Setup
1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
2. Start the server:
    ```sh
    node server.js # Runs on http://localhost:3001
    ```

### Frontend Setup
1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the application:
    ```sh
    npm start # Runs on http://localhost:3000
    ```

## State Management
This application used the `useState` hook for state management originally . It has been modified to use **Redux** for state management, **React-Redux** for integrating Redux with React, and **Redux-Saga** for handling side effects.

### Key Libraries
- **Redux**: A JS library for predictable and maintainable global state management
- **React-Redux**: Official React bindings for Redux.
- **Redux-Saga**: A library to handle side effects in Redux applications. An intuitive Redux side effect manager.

### Adding Redux to the Project
1. Install Redux, React-Redux, and Redux-Saga:
    ```sh
    cd frontend
    npm install redux react-redux redux-saga
    ```

2. Overall Redux & Redux-Saga Flow
    - 1. Define Action Types -> Centralized constants for action types.
    - 2. Define Actions -> Functions that return action objects.
    - 3. Create Reducers -> Pure functions that update state based on actions.
    - 4. Create Sagas -> Handle side effects (such as API calls).
    - 5. Set Up Store -> Combine reducers, apply middleware (Saga).
    - 6. Wrap `<Provider store={store}>` in index.js -> Makes Redux store available to all components.
    - 7. Dispatch Actions from Components -> Triggers the Redux-Saga flow.
    - 8. Saga Handles API Calls -> Updates Redux store with API response.
    - 9. Components Read from Redux State -> UI updates based on new state.

## Additional Information
For more details on how to configure and use Redux, React-Redux, and Redux-Saga, refer to their official documentation:
- [Redux](https://redux.js.org/)
- [React-Redux](https://react-redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)