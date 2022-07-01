const express = require('express');
const path = require('path');
const app = express();


// middleware
// creates route for every file in this folder that we specify to this middleware
app.use(express.static('public'));



// You can only have 1 server running per PORT
// Mongo DB uses 27017
// Redis uses 6307

const PORT = 3001;

const todos = [
    {
        id: 1,
        todo: 'Take test',
    },
    {
        id: 2,
        todo: 'Update resume',
    },
    {
        id: 3,
        todo: 'Buy lunch',
    },
    {
        id: 4,
        todo: 'Eat dinner',
    },
]


// 1st parameter = request object
    // info abt incoming request
    
// 2nd parameter = response obj
    // functions for responding to the specific request
app.get('/api/todos', (req, res) => {
    console.log('todos path hit');
    res.json(todos);
})

app.get('/api/me', (req, res) => {
    console.log('me path hit');
    res.json({
        firstName: 'Jack',
        age: '19'
    })
})


app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


app.listen(PORT, () => console.log('server successfully listening'))
