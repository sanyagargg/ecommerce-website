const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const newDesignRoutes = require('./routes/NewDesignRoute');
const getQuoteRoutes = require('./routes/GetQuoteRoute'); // Include GetQuote route

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.use('/api/newDesign', newDesignRoutes);
app.use('/api/getQuote', getQuoteRoutes); // Use GetQuote route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
