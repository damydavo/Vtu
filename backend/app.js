import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleWare/errorMiddleware.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 8000

import userRoute from './routes/userRoute.js'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dotenv.config()
connectDB()

app.use('/api/users', userRoute)


app.use(notFound);
app.use(errorHandler)

app.listen(port, () => console.log(`app is listening on port ${port}`));