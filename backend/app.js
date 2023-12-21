import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { notFound, errorHandler } from './middleWare/errorMiddleware.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 8000

import userRoute from './routes/userRoute.js'
import dataRoute from './routes/dataRoute.js'

const app = express();
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dotenv.config()
connectDB()

app.use((req, res, next) => {
    if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
        return res.sendStatus(204);
    }

    return next();
});


app.use('/api/users', userRoute)
app.use('/api/data', dataRoute)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(process.cwd(), 'frontend/build')));
    app.get('*', (req, res) => res.sendFile(path.join(process.cwd(), 'frontend/build/index.html')));

}

app.use(notFound);
app.use(errorHandler)

app.listen(port, () => console.log(`app is listening on port ${port}`));