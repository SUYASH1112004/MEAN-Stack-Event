const express = require('express');
const bodyparser = require('body-parser');
const cors=require('cors');
const path=require('path');

require('dotenv').config()

const api=require('./routes/api');

const port=process.env.port;

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyparser.json());

app.use('/api',api);

app.listen(port,function(){
    console.log("Server is running"+port)
});

