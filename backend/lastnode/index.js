import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 6060;

const connectDb = async () => {
    try {
        const DB_OPTIONS = {
            dbName: "Test"
        };

        await mongoose.connect(
            'mongodb://localhost:27017/',
            DB_OPTIONS
        );

        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
    }
};

app.get('/', (req, res) => {
    res.json("This Is My Express Server");
});

app.listen(PORT, () => {
    console.log(`Server Is Running At http://localhost:${PORT}`);
});
connectDb();