import React, { useState } from 'react';
import axios from 'axios';
import './GreetingComponent.css';

const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001"; // Use the assigned port for development or default to 3001

const GreetingComponent = () => {
    const [greeting, setGreeting] = useState("");

    const handleFetchGreeting = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/greeting`);
            setGreeting(response.data.greeting);
        } catch (error) {
            console.error("Error fetching greeting:", error);
            setGreeting("Error fetching data");
        }
    };

    const handleReset = () => {
        setGreeting("");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "33vh" }}>
            <h1>{greeting || "Click the button to see a random greeting!"}</h1>
            <div style={{ display: "inline-flex", gap: "10px" }}>
                <button className="btn" onClick={handleFetchGreeting}>Get Greeting</button>
                {greeting && <button className="btn reset-btn" onClick={handleReset} style={{ marginLeft: "10px" }}>Reset</button>}
            </div>
            {greeting && <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Click multiple times to see different greetings</p>}
        </div>
    );
};

export default GreetingComponent;