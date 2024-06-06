const Joke = require("../models/jokes.models");

module.exports.getAllJokes = (req, res) => {
  Joke.find()
    .then((jokes) => res.status(200).json({ jokes }))
    .catch((err) =>
      res.status(400).json({ msg: "error al solicitar las bromas", err })
    );
};

module.exports.getJokeById = (req, res) => {
  Joke.find({_id: req.params.id})
    .then((jokes) => res.status(200).json({ jokes }))
    .catch((err) =>
      res.status(400).json({ msg: "error al solicitar las bromas", err })
    );
};

module.exports.getRandomJoke = (req, res) => {
  Joke.find()
    .then((jokes) =>{
      let randomIndex = Math.floor(Math.random() * jokes.length);
      let randomJoke = jokes[randomIndex];
    
      res.status(200).json({ joke: randomJoke });
    }
    )
    .catch((err) => res.status(400).json({msg:"error al consultar por una broma", err}));
};

module.exports.createJoke = (req,res)=>{
  Joke.create(req.body)
    .then((newJokes)=> res.json({newJokes}))
    .catch(err => res.json({err: "error al agregar la broma", err}))

}

module.exports.updateOneJoke = (req,res)=>{
  Joke.findByIdAndUpdate({_id: req.params.id},req.body, {new: true})
    .then((updatedJoke)=> res.status(200).json({updatedJoke}))
    .catch(err => res.status(400).json({msg:"error al actualizar",err}))
}


module.exports.deleteJoke = (req,res)=>{
  Joke.deleteOne({_id: req.params.id})
    .then((jokeDeleted)=> res.json({jokeDeleted}))
    .catch(err => res.json({msg:"error al eliminar la broma ",err}))
}