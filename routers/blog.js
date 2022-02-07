const express=require('express')
const router=express.Router()
const port=3000
const path=require('path')
const blogs=require('../data/blogs')

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../template/index.html'))
    res.render('home')
})

router.get('/blogs',(req,res)=>{
    // blogs.forEach(element => {
    //     console.log(element.title)
        
    // });
    
    // res.sendFile(path.join(__dirname,'../template/blogHome.html'))
    res.render('blogHome',{
        bloga: blogs

    });
    
})

router.get('/blogpost/:slug',(req,res)=>{
    myBlog=blogs.filter((e)=>{
      return  e.slug == req.params.slug
    })
    res.render('blogPost',{
        title: myBlog[0].title,
        contents:myBlog[0].contents

    });
    
    // res.sendFile(path.join(__dirname,'../template/blogpost.html'))
})

module.exports=router

