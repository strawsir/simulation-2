const bodyParser = require('body-parser');
const express = require('express');
const massive = require('massive');
const hc = require('./controller');
require('dotenv').config();
const app = express();
const port = 4000;
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.get('/api/houses', hc.getAllHouses);
app.post('/api/addHouses', hc.addHouses);
app.delete('api/houses/:id', hc.deleteHome);


app.listen(port, ()=>console.log(`Port ${port} is a go!`))