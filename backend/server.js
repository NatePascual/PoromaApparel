const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const path = require('path');

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Simple route to test the server
app.get('/', (req, res) => {
  res.send('Welcome to LiveThread Apparel backend');
});

// Example for importing routes
// const eventRoutes = require('./routes/events');
// app.use('/api', eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));