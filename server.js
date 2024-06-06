const express = require('express');
const port = 3001;
const app = express();

require("./server/config/mongoose.config");



app.use(express.json(), express.urlencoded({ extended: true }));

const jokesRoute = require('./server/routes/jokes.route');
jokesRoute(app);






app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
})