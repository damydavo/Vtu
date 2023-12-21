import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { notFound, errorHandler } from './middleWare/errorMiddleware.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 8000

import userRoute from './routes/userRoute.js'
import dataRoute from './routes/dataRoute.js'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')));


dotenv.config()
connectDB()

app.use('/api/users', userRoute)
app.use('/api/data', dataRoute)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', build, 'index.html'))
}
else { 
    app.get('/', (req, res) => {
        res.status(200).json({ message: "Welcome to VTU application" })
    })
}

app.use(notFound);
app.use(errorHandler)

app.listen(port, () => console.log(`app is listening on port ${port}`));