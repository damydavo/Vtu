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

dotenv.config()
connectDB()

app.use('/api/users', userRoute)
app.use('/api/data', dataRoute)

app.use(express.static(path.join(__dirname, '/frontend/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", 'build', 'index.html'))
})

app.use(notFound);
app.use(errorHandler)

app.listen(port, () => console.log(`app is listening on port ${port}`));