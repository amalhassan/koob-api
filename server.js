const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const userRouter = require('./routes/userRoutes.js');
const { errHandler } = require('./middleware/errorMiddleware.js');
const connectDatabase = require('./config/db.js');

connectDatabase()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api', userRouter)

app.use(errHandler)

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
)