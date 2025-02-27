import dotenv from "dotenv"
import express from "express"
import connectDB from './db/index.js'
import router from './routes/auth.routes.js'
import {app} from './app.js'


dotenv.config({ path: './env' })

const app = express()

app.use('/auth',router)
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    })
    .catch((err) => {
      console.log("Server startup failed:", err);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });






