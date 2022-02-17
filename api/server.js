const express = require('express');
const recipeRouter = require('./recipe-router');

const server = express();

server.use(express.json());


server.use('/api/recipes', recipeRouter);

server.use('*', (req, res) => { //catchall needs to be at end
    res.json({ api: 'up' })
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the recipe router',
        message: err.message,
        stack: err.stack,
    });
});


module.exports = server;
