const express = require('express');
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config();


app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

require('./config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({extended:true}))


require('./routes/user.routes')(app);



const server = app.listen(8080, () => console.log('Connected!'))
