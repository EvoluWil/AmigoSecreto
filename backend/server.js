import { mongo } from "./database.js";
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { routes } from './routes.js';

const app = express();

mongoose.connect(process.env.MONGODB_URI || mongo, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3001);
