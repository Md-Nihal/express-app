const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('hello my smart express, How are You?')
})

app.use(cors());
app.use(express.json());


const users = [
    {id: 1, name: 'Alom', email: 'alom@gmail.com', phone: '01856918574'},
    {id: 2, name: 'Rashed', email: 'Rashed@gmail.com', phone: '01856918574'},
    {id: 3, name: 'Sojib', email: 'Sojib@gmail.com', phone: '01856918574'},
    {id: 4, name: 'Mitu', email: 'mitu@gmail.com', phone: '01856918574'},
    {id: 5, name: 'nipa', email: 'nipa@gmail.com', phone: '01856918574'},
    {id: 6, name: 'Nila', email: 'nila@gmail.com', phone: '01856918574'},
    {id: 7, name: 'Alif', email: 'alif@gmail.com', phone: '01856918574'},
]

app.get('/users', (req, res) =>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else{
       res.send(users);
    }
    
})

app.post('/user', (req, res) =>{
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})

app.get('/user/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.listen(port, () =>{
    console.log('listening to port', port)
})