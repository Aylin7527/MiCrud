const express = require('express');
const bodyParser = require('body-parser');

const principal = express();

principal.set('view engine', 'ejs');


principal.use(bodyParser.json()); 
principal.use(bodyParser.urlencoded({ extended: true })); 


principal.use('/', require('./router'));

principal.listen(5000, () => {
    console.log('SERVER CORRIENDO EN http://localhost:5000');
});