const express = require('express');
const morgan = require('morgan');
const data = require('./base/db.json')
const fs = require('fs');
const path = require('path');
// const imagesRouter = require('./assets');
// const cors = require('cors');
const app = express();
//configuraciones
app.set('port', process.env.PORT || 3000);


//middlewares 
// app.use('/assets', express.static(path.join(__dirname, './assets')));
app.use(morgan('dev'));
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
// app.use('/items/', indexRoutes)
app.get('/assets/:name', (req, res) => {
    // Obtiene el nombre de la imagen desde la ruta
    const nombre = req.params.name;
  
    // Lee el archivo de imagen
    fs.readFile(path.join(__dirname, 'assets', name), (err, data) => {
      if (err) {
        res.status(404).json({ error: 'Imagen no encontrada' });
      } else {
        // Especifica el tipo de contenido como imagen
        res.contentType('image/png');
        // Envía los datos de la imagen en la respuesta
        res.send(data);
      }
    });
  });
  
app.get('/', async (req, res)=>{
    // const characters = await characters.find();
    res.json(data);
    console.log(data)
});
// app.get('/assets', (req, res) => {
//     res.json({imagen: '/assets'});
//   });
app.listen(app.get('port'), ()=>{
    console.log('Server started', app.get('port'));
});