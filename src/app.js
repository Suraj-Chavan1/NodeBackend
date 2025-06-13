import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json({
    limit:"16kb"
}))

app.use(cookieParser())

app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))

// routes 
import userRouter from "./routes/user.routes.js"
// routes declaration 
app.use("/user",userRouter)
export {app}
