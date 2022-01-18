const express = require('express');
const app = express();
const PORT = 4000 | process.env.port;
app.get('/',(req,res)=>{
    res.send("Hello Welcome to Diary App");
});

app.listen(PORT,()=>{
    console.log("App running on Port : ${PORT}")
})