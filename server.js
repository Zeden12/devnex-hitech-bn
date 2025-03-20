const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Import from config folder

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('Devnex Backend is Running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});