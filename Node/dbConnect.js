﻿import mongoose from "mongoose"

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB")
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

export default dbConnect