const express = require('express');
const cors = require('cors'); // Added the missing import for cors
const app = express();
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const productRoutes = require('./routes/productRoutes');

// Load environment variables
dotenv.config();
connectDB();

app.use(cors()); // Moved this line after the connectDB call

app.use('/api/products', productRoutes);

// Middleware
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});