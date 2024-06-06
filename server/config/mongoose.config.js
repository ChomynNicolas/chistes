const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes_db")
    .then(()=> console.log('connected to the database'))
    .catch(err => console.log('error to connect to the database',err))