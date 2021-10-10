const express = require('express');
const path = require('path');
const morgan = require('morgan');
const _ = require("lodash")
const mathjs =require("mathjs")

const app = express()
const port = 3000

app.use(morgan('tiny'))

app.get('/healthcheck', (req, res) => {
  res.send(`ok!`)
})

app.get('/', (req, res) => {
    res.send(`🐸 Welcome to SWAMPUP-2021 🐸`)
})

app.get('/session', (req, res) => {
    res.send(`🐸 SU-201 Intro to DevSecOps with JFrog Xray 🐸`)
})

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(mathjs.random(1,1000000000000));

app.use((req, res, next) => {
    const error = new Error("Not found");
    console.log(error)
    error.status = 404;
    error.message = "🐸 Ribbit Ribbit Ribbit Ribbit 🐸"
    next(error);
});

// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
      },
    });
  });

const HelloFrogs = {
    message: "🐸 Welcome to SWAMPUP-2021 🐸"
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports.HelloFrogs = HelloFrogs;