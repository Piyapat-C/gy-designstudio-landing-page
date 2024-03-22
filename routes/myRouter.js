const express = require('express')
const router = express.Router()
const Client = require('../models/clients')

router.get('/', (req, res)=>{
    res.render('index')
})
router.get('/thanks', (req, res)=>{
    res.render('thanks')
})


router.post('/', (req, res)=>{
    let data = new Client({
        email:req.body.email
        })   
    data.email = req.body.email
    data.createdAt = new Date();
    data.save()
    .then(()=>{
        console.log("Data save successful!!");
    })
    .catch((error)=>{
        console.log('Error', error)
    })
    res.redirect('thanks')
    console.log(data)

})


module.exports = router