const path = require('path')
const express = require('express')
const blogs = require('../Data/blogs')

const router = express.Router()


router.get('/', (req , res)=>{
    res.sendFile(path.join(__dirname , '../Templetes/index.html'))
})

router.get('/blog', (req , res)=>{
    // blogs.forEach(e=>{
    //     console.log(e.title);
    // })
    res.sendFile(path.join(__dirname , '../Templetes/bloghome.html'))
})

router.get('/blogpost/:slug', (req , res)=>{
    // blogs.forEach(e=>{
    //     console.log(e.title);
    // })
    myblog = blogs.filter((e)=>{
       return e.slug == req.params.slug
    })

    console.log(myblog)
    //  res.sendFile(path.join(__dirname , '../Templetes/blogpage.html'))
    res.json(myblog);
    
})

router.get('/allblogs', (req , res)=>{
    
    res.json(blogs);
})

module.exports = router;