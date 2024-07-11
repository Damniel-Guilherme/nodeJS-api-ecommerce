const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// DB Connection
const conn = require('./db/conn');

conn();

// Routes
const routes = require('./routes/router')

app.use('/api', routes)

app.listen(port, function() {
    console.log(`Servidor Online! localhost:${port}/api/services`);
});