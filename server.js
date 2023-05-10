const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
const userInfo = require('./routes/userRoutes.js');
const { errHandler } = require('./middleware/errorMiddleware.js');
app.use(express.json())

app.use('/api/user/:id', userInfo)

app.use(errHandler)

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
)