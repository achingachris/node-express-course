const express = require('express');
const app = express(); //creates an instance of the express constructor
const bodyParser = require('body-parser');

app.use(bodyParser.json());

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

app.get('/users/:id', function(req, res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one answer',
        user: req.params.id
    })
})

app.post('/login', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const mockUserName = 'billyTheKid';
    const mockUserPassword = 'superSecret';

    if (username === mockUserName && password === mockUserPassword) {
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
      	 	message: 'password and username do not match'
        })   
    }
})

app.listen(8000, function() {
    console.log("Server is running")
})