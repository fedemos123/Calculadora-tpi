'use strict';

var calcu = require('./app/calcu');

var a = 3;
var b = 5;

var v1 = `El resultado de la suma es: ${a} + ${b} = ${calcu.suma(a,b)}`;


const express = require('express')

const app = express()

const port = process.env.PORT || 8000

app.get('/', (req,res) => res.send(v1))

app.listen(port, () => console.log(port))