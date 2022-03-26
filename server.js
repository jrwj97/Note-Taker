const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./db/db.json')

var app = express();
var PORT = process.env.PORT || 3001;

// app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  res.json(db);
})

app.post("api/notes", (req, res) => {
  let filePath = path.join(__dirname, "/db/db.json");
  let newNote = req.body;
  let highId = 99;

  for (let i = 0; i < db.lenhgth; i++) {
    let indNote = db[i];
    if (indNote.id > highId) {
      highId = indNote.id;
    }
  }
  newNote.id = highId + 1;
  database.push(newNote);
})

app.listen(PORT, (req, res) => {
  console.log(`Server running on ${PORT}`);
});