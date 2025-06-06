const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URL_MONGOOSE)
        console.log("MongoDB Connected")
    } catch (error) {
        console.error("MongoDB Connection Error", error)
        process.exit(1);
    }
}

module.exports = connectDB;