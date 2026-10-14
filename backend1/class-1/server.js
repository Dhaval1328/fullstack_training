const express = require('express');

const app = express();
const PORT = 7070;

app.get('/', (req, res) => {
    res.send("This Is My Second Server");
});

app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
});
