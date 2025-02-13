const express = require('express'); // Import the express module
const cors = require("cors"); // Import the cors module

const app = express(); // Create an instance of an Express application
// Deployed on Vercel and it sets the PORT environment variable automatically.
// If the PORT environment variable is not defined, default to port 3001.
const PORT = process.env.PORT || 3001; 

app.use(cors()); // Enable cross-origin requests for all routes

const greetings = [
  "Hello, World!",
  "Hi there!",
  "Greetings!",
  "Howdy!",
  "Hey, how's it going?",
  "Welcome!"
]

// API endpoint to get a random greeting
app.get('/api/greeting', (req, res) => {
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  res.json({ greeting: randomGreeting });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});