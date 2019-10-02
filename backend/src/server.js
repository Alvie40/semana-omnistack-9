const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
PORT = 3333;

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-vfvfj.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

app.use(express.json());
app.use(routes);
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
