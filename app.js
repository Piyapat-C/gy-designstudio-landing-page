const express = require('express')
const path = require('path')
const router = require('./routes/myRouter')
const app = express()
const port = 8000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(router)
app.use(express.static(path.join(__dirname,'public')))

app.listen(port, ()=>{
    console.log("Strat server at port 8000");
})