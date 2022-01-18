const express = require('express');
const app = express();
const PORT = 4000 | process.env.port;
app.get('/',(req,res)=>{
    res.send("Hello Welcome to Diary App");
});

app.get('/entries',(req,res)=>{
    res.send(["test","test2"]);
})

app.listen(PORT,()=>{
    console.log("App running on Port : "+ PORT)
})