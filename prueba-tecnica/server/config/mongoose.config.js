const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pruebaTecnica',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log('DB CONECTION ESTABLISHED'))
    .catch((err)=>console.log('THERE WAS AN ERROR',err))