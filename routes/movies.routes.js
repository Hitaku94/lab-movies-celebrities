const router = require('express').Router()
const mongoose = require("mongoose")
const MoviesModel = require('../models/movies.model')
const CelebritiesModel = require('../models/celebrities.model')

router.get("/movies/create", (req, res, next) => {

  CelebritiesModel.find()
  .then((celebrities) => {
    res.render('movies/new-movie.hbs', { celebrities })
  })
  .catch((err) => {
    console.log(err)
  });
      
})

router.post("/movies/create", (req, res, next) => {
  const { title, genre, plot, cast } = req.body
  MoviesModel.create( { title, genre, plot, cast } )
    .then(() => {
      console.log("movie got created")
      res.redirect('/movies')
    
    })
    .catch((err) => {
      console.log(err)
      res.render('movies/new-movie')
     
    });
})

router.get('/movies', (req, res, next) => {

  MoviesModel.find()
  .then((movies) => {
      res.render('movies/movies.hbs', {movies})
  })
  .catch((err) => {
      console.log(err)
  });
})

router.get('/movies/:id', (req, res, next) => {
  const { id } = req.params
  MoviesModel.findById(id)
  .populate('cast')
  .then(( movies ) => {
      res.render('movies/movie-details.hbs', { movies })
  })
  .catch((err) => {
    console.log(err)
    
  });
})

router.post('/movies/:id/delete', (req, res, next) => {

  MoviesModel.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/movies')
  })
  .catch((err) => {
    console.log(err)
  });
})

router.get('/movies/:id/edit', (req, res, next) => {

  MoviesModel.findById(req.params.id)
  .then((movies) => {
    res.render('movies/edit-movie.hbs', { movies })

  })
  .catch((err) => {
    console.log(err)
  })
})



router.post('/movies/:id/edit', (req, res, next) => {
MoviesModel.findByIdAndUpdate(req.params.id)
.then(() => {
  res.redirect('/movies')
})
.catch((err) => {
  console.log(err)
});
})

module.exports = router;