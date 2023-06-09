const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const userRouter = require('./routes/userRoutes.js');
const { errHandler } = require('./middleware/errorMiddleware.js');
const connectDatabase = require('./config/db.js');
const cors = require("cors");

connectDatabase()

const app = express();
app.use(cors());
app.use(express.json())
app.use('/api', userRouter);

app.use(errHandler)

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
)