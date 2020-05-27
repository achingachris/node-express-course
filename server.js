const express = require('express');
const app = express(); //creates an instance of the express constructor

const mockUserData = [
    {name:'Mark'},
    {name:'Jill'}
]

app.get('/users', function(req, res){
    res.json({
        success:true,
        message: 'sucessfully got users. nice',
        users: mockUserData
    })
})

app.listen(8000, function() {
    console.log("Server is running")
})