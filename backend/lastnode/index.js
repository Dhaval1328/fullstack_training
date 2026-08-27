// import os from 'os'


// console.log(os)
// console.log("Architecture is",os.arch());
// console.log("How Many Core In My Computer",os.cpus().length);

import express from 'express'

const app = express();
const PORT = 6060;

app.get('/', (req, res) => {
    res.json("This Is My Express Server");
});

app.listen(PORT, () => {
    console.log(`Server Is Running At http://localhost:${PORT}`);
});
