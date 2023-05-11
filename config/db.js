const mongoose = require('mongoose');

const connectDatabase = async() => {
    try {
        const conct = await mongoose.connect(process.env.MONGODB_URI) 
        console.log(`MongoDB connection - ${conct.connection.host}`)
    } catch (err) {
        process.exit(1)
    }
}

module.exports = connectDatabase