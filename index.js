const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    return res.send('Hello, World!');
});

app.get('/health', (req, res) => {
    return res.status(200).json({ status: 'OK' });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});