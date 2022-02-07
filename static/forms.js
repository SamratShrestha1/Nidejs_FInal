const express=require('express')
const path=require('path')
const app=express()
const port=3000


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../template/form.html'))
})

app.get('/join',(req,res)=>{
    fullName={
        fname:req.query.firstname,
        last:req.query.lastname
    };
    console.log(fullName)
    // res.sendFile(path.join(__dirname,'../template/blogpost.html'))
    res.send(fullName)
})


app.listen(port,()=>{
    console.log("Port")
})