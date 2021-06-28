'use strict';

var a = require('./app/holam');

const express = require('express')

const app = express()

const port = process.env.PORT || 8000

app.get('/', (req,res) => res.send(a))

app.listen(port, () => console.log(port))