// import React, { useState } from 'react';
// import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingRequest, resetGreeting } from '../../redux/features/greeting/greetingActions';
import './GreetingComponent.css';

// const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : process.env.REACT_APP_BACKEND_URL;

const GreetingComponent = () => {
    // const [greeting, setGreeting] = useState("");

    // const handleFetchGreeting = async () => {
    //     try {
    //         const response = await axios.get(`${API_URL}/api/greeting`);
    //         setGreeting(response.data.greeting);
    //     } catch (error) {
    //         console.error("Error fetching greeting:", error);
    //         setGreeting("Error fetching data");
    //     }
    // };

    // const handleReset = () => {
    //     setGreeting("");
    // };

    // After implementing redux, redux-saga, and react-redux, we can use the following code instead of the above code:
    const dispath = useDispatch();
    const { greeting, loading, error } = useSelector((state) => state.greeting);

    return (
        <div style={{ textAlign: "center", marginTop: "33vh" }}>
            
            {/* <h1>{greeting || "Click the button to see a random greeting!"}</h1> */}
            <h1>{loading ? "Loading..." : error ? `Error: ${error}` : greeting || "Click the button to see a random greeting!"}</h1>
            
            <div style={{ display: "inline-flex", gap: "10px" }}>
                
                {/* <button className="btn" onClick={handleFetchGreeting}>Get Greeting</button> */}
                <button className="btn" onClick={() => dispath(fetchGreetingRequest())}>Get Greeting</button>
                
                {/* {greeting && <button className="btn reset-btn" onClick={handleReset} style={{ marginLeft: "10px" }}>Reset</button>} */}
                {greeting && (
                    <button className="btn reset-btn" onClick={() => dispath(resetGreeting())} style={{ marginLeft: "10px" }}>
                        Reset
                    </button>
                )}
            </div>
            {greeting && <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>Click multiple times to see different greetings</p>}
        </div>
    );
};

export default GreetingComponent;