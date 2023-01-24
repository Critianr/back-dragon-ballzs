const express = require('express');
const morgan = require('morgan');
const data = require('./base/db.json')
// const cors = require('cors');
const app = express();
//configuraciones
app.set('port', process.env.PORT || 3000);


//middlewares 
app.use(morgan('dev'));
// app.use(cors());
// app.use((req, res, next)=>{
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
//  });
 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.use(express.static(__dirname + '/public'));

//rutas
// app.use('/items/', indexRoutes)
app.get('/', async (req, res)=>{
    // const characters = await characters.find();
    res.json(data);
    console.log(data)
});

app.listen(app.get('port'), ()=>{
    console.log('Server started', app.get('port'));
});