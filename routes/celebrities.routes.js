const router = require('express').Router()
const mongoose = require("mongoose")
const CelebritiesModel = require('../models/celebrities.model')

router.get("/celebrities/create", (req, res, next) => {

      res.render('celebrities/new-celebrity')
})

router.get('/celebrities', (req, res, next) => {

    CelebritiesModel.find()
    .then((celebrities) => {
        res.render('celebrities/celebrities.hbs', {celebrities})
    })
    .catch((err) => {
        console.log(err)
    });
})


router.post('/celebrities/create', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body
    
    CelebritiesModel.create({name, occupation, catchPhrase})
    .then(() => {
        console.log('Data is created')
        res.redirect('/celebrities')
        
    })
    .catch((err) => {
        console.log(err)
        res.render('celebrities/new-celebrity')
        
    });
})


module.exports = router;