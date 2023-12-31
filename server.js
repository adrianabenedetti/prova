import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRoute from './routes/users.js'

dotenv.config();

const PORT = 5050;

const server = express();

server.use("/", usersRoute);


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erorre di connessione ad DB'));
db.once('open', () => {
    console.log('DB connesso correttamente')
});

server.listen(PORT, () => console.log(`Server avviato sulla porta ${PORT}`));