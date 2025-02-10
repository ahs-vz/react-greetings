const express = require('express'); // Import the express module
const cors = require("cors"); // Import the cors module

const app = express(); // Create an instance of an Express application
const PORT = 3001;

app.use(cors()); // Enable cross-origin requests

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