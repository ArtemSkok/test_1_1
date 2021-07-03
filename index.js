const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('HELLO WORLD!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}`);
});