require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const username = process.env.DB_USERNAME;
const password = encodeURIComponent(process.env.DB_PASSWORD);
const clusterUrl = process.env.DB_CLUSTER_URL;
const appName = process.env.DB_APPNAME;
const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/?retryWrites=true&w=majority&appName=${appName}`;



const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Routes
const questionnairesRoutes = require('./routes/questionnaires');
app.use('/api/questionnaires', questionnairesRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
