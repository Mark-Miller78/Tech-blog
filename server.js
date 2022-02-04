const express = require('express');
const routes = require('./Controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exp = require('constants');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force:true}).then(()=>{
    app.listen(PORT, ()=> console.log("Now Listening!"));
});