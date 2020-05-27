const express = require('express');
const app = express(); //creates an instance of the express constructor

app.listen(8000, function() {
    console.log("Server is running")
})