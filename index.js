const express=require('express');
const app=express();
const port=8005;

app.listen(port,()=>{
    console.log("Server start");
})

app.get("/",(req,res)=>{
    res.send("Hello from server")
})
app.get("/user",(req,res)=>{
    res.send("Hello from user")
})