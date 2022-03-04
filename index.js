const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

mongoose
    .connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@mongo:27017/?authSource=admin`) //mongo is replaced by IP as custom networks can talk to each other by name
    .then(() => {
        console.log('successfully connected to mongo db!');
    })
    .catch((err) => {
        console.log(err);
    });

app.get('/', (req, res) => {
    res.send('<h2> Hello Worl1d!</h2>');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
