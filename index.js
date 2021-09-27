const express = require('express')
const path = require('path')
const app = express()
const port = 3000

//own middleware 

const dfudemiddleware = (req , res , next)=>{
    console.log(req);
    next();
}


 app.use(express.static(path.join(__dirname , 'public')))

//use of ownmiddleware
//  app.use(dfudemiddleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World! ' + req.params.name)
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/json', (req, res) => {
    res.json([{'name' : 'sushant' , 
    'roll' : 76}]);
})

app.get('/complex', (req, res) => {
    // res.send('About')
    res.sendFile(path.join(__dirname , 'index.html'));
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})