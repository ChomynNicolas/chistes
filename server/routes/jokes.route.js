const jokesController = require('../controllers/jokes.control');

module.exports = app =>{
    app.get('/api/jokes',jokesController.getAllJokes);
    app.get('/api/joke/:id', jokesController.getJokeById);
    app.get('/api/jokes/random',jokesController.getRandomJoke);
    app.post('/api/createjoke',jokesController.createJoke);
    app.put('/api/updateJoke/:id', jokesController.updateOneJoke);
    app.delete('/api/deletejoke/:id',jokesController.deleteJoke);
};

