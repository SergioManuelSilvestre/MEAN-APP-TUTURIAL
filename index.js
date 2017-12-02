const express = require('express');
const app = express();

const mongoose = require('mongoose');
const config = require('./config/database');

const path = require ('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) =>
 {
    if (err)
    {
        console.log('nao conectou  base de dados', err);

    }
    else {
       
        console.log ('conectado base de dados: ' + config.db);
    }
});

app.use (express.static(__dirname + '/client/dist'));

app.get('*', (req, res)=>{
    res.sendFile(Path.join(__dirname + '/client/dist/index.html'));
  });
  

  app.listen(8080,()=> {
    console.log('escutar no port 8080');
  
  });
