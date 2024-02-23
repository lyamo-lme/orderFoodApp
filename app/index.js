import express from "express";
 import authRouter from "./routes/auth/auth.router.js";

const PORT = "5000";
const app = express();

app.use(express.json()); 
app.use("/auth", authRouter);

app.get("/", (req, res)=>{
    res.status(200).json("welcom to api");
})


app.listen(PORT, ()=>{
    console.log("start");
});