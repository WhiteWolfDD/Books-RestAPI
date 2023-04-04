require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');
const { dbConnect} = require("./sequelize");
const errorHandler = require("./middleware/bridge");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', dataRoutes);
app.use(errorHandler);

function tryConnect() {
    dbConnect.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        setTimeout(tryConnect, 5000);
    });
}

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    tryConnect();
    console.log(`Server started on port ${port}`);
});