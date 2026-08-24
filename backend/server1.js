import http from 'http';

const PORT = 5000;

const app = http.createServer((req, res) => {
    res.end("This is my First server1");
});

app.listen(PORT, () => {
    console.log(`Server is Running At http://localhost:${PORT}`);
});