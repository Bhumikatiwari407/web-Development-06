import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import AuthRouter from "./src/routers/auth.route.js"
import PublicRouter from "./src/routers/public.route.js"
import connectDB from "./src/config/dbConnection.config.js"

const app = express();
app.use(express.json());

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

//default API
app.get("/",(req,res)=>{
    console.log("Default Get API Hit")
    res.json({message:"Welcome to my First backend Project"});
});

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server Started on port:", port);
    connectDB();
});





// app.post("/login",(req,res) => {
    
//     res.json({message:"Login Successful"});
    
// });
// app.get("/logout",(req,res) => {
    
//     res.json({message:"Logout Successful"});
    
// });
// app.post("/register",(req,res) => {
    
//     res.json({message:"Register Successful"});
    
// });
// app.put("/update",(req,res) => {
    
//     res.json({message:"update Successful"});
    
// });
// app.delete("/delete",(req,res) => {
    
//     res.json({message:"deleted Successful"});
    
// });