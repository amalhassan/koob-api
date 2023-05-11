const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const noteRouter = require('./routes/noteRoutes.js');
const { errHandler } = require('./middleware/errorMiddleware.js');
const connectDatabase = require('./config/db.js');

connectDatabase()

const app = express();

app.use(express.json())

app.use('/api/notes', noteRouter)

app.use(errHandler)

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
)