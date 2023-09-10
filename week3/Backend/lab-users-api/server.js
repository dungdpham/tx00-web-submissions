const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

const users = [];

app.get('/', (req, res) => {
    res.send('<h1>Lab-users-api</h1>');
});

app.get('/api', (req, res) => {
    res.send('enter /users or /users/:id path to proceed')
})

app.get('/api/users', (req, res) => {
    res.json(users);
})

app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({message: 'The user with the specified ID does not exist'})
    }
    //throw new Error('The user information could not be retrieved')
})

app.post('/api/users', (req, res) => {
    const {name, bio} = req.body;
    if (name && bio) {
        const newUser = {
            id: users.length + 1,
            name,
            bio
        };
        users.push(newUser);
        res.status(201).json(newUser)
    } else {
        res.status(400).json({message: 'Please provide name and bio for the user'})   
    }
    //throw new Error('There was an error while saving the user')
})

app.put('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const {name, bio} = req.body;
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
        res.status(404).json({message: 'The user with the specified ID does not exist'})
    } else if (!name || !bio) {
        res.status(400).json({message: 'Please provide name and bio for the user'})
    } else {
        users[index] = {
            id,
            name,
            bio
        };
        res.status(200).json(users[index])
    }
    //throw new Error('The user information could not be modified')
})

app.delete('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
        users.splice(users.indexOf(user), 1);
        res.json(user)
    } else {
        res.status(404).json({message: 'The user with the specified ID does not exist'})
    }
    //throw new Error('The user could not be removed')
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(err.message)
})