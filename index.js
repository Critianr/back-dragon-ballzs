const express = require('express');
const morgan = require('morgan');
const data = require('./base/db.json')
const cors = require('cors');
const mysql = require('mysql');
// const fs = require('fs');
const path = require('path');
// const imagesRouter = require('/assets');
// const cors = require('cors');

const app = express();
// const connection = mysql.createConnection(
//     // {
//     'mysql://m5sk87gp6xzsy8u0hyzz:pscale_pw_yZGnJA4Hetu7z1695wrziNbvR7xiexmHKhCifGMVSId@us-east.connect.psdb.cloud/dbzs-db?ssl={"rejectUnauthorized":true}'
// //   host: 'http://dragonballzsuperbd.orgfree.com/ftp/',
// //   user: '502175',
// //   password: 'Jalape20',
// //   database: '502175',
// // }
// )
// connection.connect(function(error){
//     if(error){
//         throw error;
//     }else{
//         console.log("CONEXION EXITOSA!!!")
//     }
// })
// Indicar que la carpeta "public" es una carpeta estática
app.use(express.static('public'));

// o Indicar que la carpeta "dist" es una carpeta estática

//configuraciones
app.set('port', process.env.PORT || 3000);
// app.use('/assets', imagesRouter);

//middlewares 
app.use('/api/assets', express.static(path.join(__dirname, './assets')));
app.use(morgan('dev'));

app.use(cors());
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
// app.use('/assets', imagesRouter);

// app.get('/assets', (req, res) => {
//     res.json({imagen: '/assets'});
//   });
app.listen(app.get('port'), ()=>{
    console.log('Server started', app.get('port'));
});
// connection.end()