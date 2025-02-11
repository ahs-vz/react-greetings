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
3. Start the development server:
    ```sh
    npm start # Runs on http://localhost:3000
    ```
