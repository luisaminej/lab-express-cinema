const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')
/* GET home page */
router.get('/', (req, res) => 
res.render('index'));

router.get("/movies", (req, res) => { 

    Movie.find({})
        .then((foundMovies) => {
            console.log(foundMovies)
                res.render("movies", {
                    movies: foundMovies
                })
        }) 
        .catch(e => console.log(e))
})

router.get("/movies/:movieId", (req, res) => {
  
    const { movieId } = req.params

    Movie.findById(movieId)
        .then(movieDetail => {
            console.log(`Found Movie:`, movieDetail)
            res.render("movie-detail", {
                movie: movieDetail
            })
        })                                                                                                              
        .catch((e) => {console.log(e)})


});




module.exports = router;
