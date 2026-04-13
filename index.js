const express = require('express');
const {users} = require('./users.js');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    return res.send('Hello, World!');
});

app.get('/health', (req, res) => {
    return res.status(200).json({ status: 'OK' });
})

app.get('/users',(req,res)=> {
    return res.status(200).json({
        users
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});