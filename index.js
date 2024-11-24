const express = require('express');
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Node.js backend!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
