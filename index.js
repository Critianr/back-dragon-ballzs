const express = require('express');
const morgan = require('morgan');
const data = require('./base/db2.json')
const cors = require('cors');
// const mysql = require('mysql');
// const fs = require('fs');
const path = require('path');
// const imagesRouter = require('/assets');
// const cors = require('cors');

const app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Establece el origen permitido
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Establece los métodos HTTP permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Establece los encabezados permitidos
  next();
  });
// Indicar que la carpeta "public" es una carpeta estática
// app.use(express.static('public'));

// o Indicar que la carpeta "dist" es una carpeta estática

//configuraciones
app.set('port', process.env.PORT || 3000);
// app.use('/assets', imagesRouter);

//middlewares 
app.use('/api/assets', express.static(path.join(__dirname, './assets')));
app.use(morgan('dev'));


// app.use((req, res, next)=>{
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
//  });
 
// app.use(cors());
// app.use((req, res, next)=>{
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
//  });
// app.use('/images', imagesRouter)

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.use(express.static(__dirname + '/public'));

//rutas
 
app.get('/api', async (req, res)=>{
    // const characters = await characters.find();
    res.json(data);
    console.log(data)
});
app.listen(app.get('port'), ()=>{
    console.log('Server started', app.get('port'));
});
// connection.end()