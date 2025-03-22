const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const swaggerSetup = require('./swagger');
const path = require('path');

const contactRoutes = require('./routes/contactRoutes');
const demoRoutes = require('./routes/demoRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/contact', contactRoutes);
app.use('/api/demo', demoRoutes);

swaggerSetup(app);

app.get('/', (req, res) => {
  res.send('Devnex Backend is Running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});