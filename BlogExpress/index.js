const express = require('express')
const path = require('path')
const app = express()
const port = 3000

//for using static folder
//app.use(express.static(path.join(__dirname , "static")));

//     access , Import file , path.join() function join all seg provided to it
app.use('/' , require(path.join(__dirname , 'Routes/blog.js')))

// console.log(__dirname); ==> G:\ExpressJsTutorialCode\BlogExpress

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

