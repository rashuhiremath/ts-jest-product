import { app } from './app'
import mongoose from "mongoose"

process.env.TS_NODE_DEV && require("dotenv").config()

const port = process.env.PORT || 3050;

console.log(process.env.MONGO_URL)

mongoose.connect(process.env.MONGO_URL!)
    .then(() => {
        console.log(`Connected to Mongo`);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    })
