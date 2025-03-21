const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const swaggerSetup = require('./swagger'); // Import Swagger setup
const path = require('path');

// Import routes
const contactRoutes = require('./routes/contactRoutes');
const demoRoutes = require('./routes/demoRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/demo', demoRoutes);

// Swagger setup
swaggerSetup(app);

// Default route
app.get('/', (req, res) => {
  res.send('Devnex Backend is Running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});