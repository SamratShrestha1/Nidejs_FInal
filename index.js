const express=require('express')
var exphbs  = require('express-handlebars');

const app=express()
const port=3000
const path=require('path')
var hbs = exphbs.create({ /* config */ });


app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname,"static")))

app.use('/',require(path.join(__dirname,'routers/blog.js')))


app.listen(port,()=>{
    console.log('http://localhost:3000')
})