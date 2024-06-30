import express from "express"
require('dotenv').config();
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("hello worlds");
})
app.get('/home',(req,res)=>{
    res.send("you are great");
})

app.listen(process.env.PORT,()=>{
    console.log("server is runnigj");
})