const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./db/db.json')

var app = express();
var PORT = process.env.PORT || 3001;

// app.use(express.static("public"));

app.use(express,urlencoded({ extended: true }));
app.use(express.json());

