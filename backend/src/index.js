const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const mongoose = require('mongoose');
const baseRouter = require('./routes/baseRouter.js');
const basemiddleware = require('./middlewares/basemiddleware.js');
require('dotenv/config');

const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieparser());
app.use('/', basemiddleware);
app.use('/', baseRouter);

app.get('/home', (req, res) =>{
  res.send('go away D:') 
});

if (!process.env.MONGODB_URI) {
  throw new Error('PROVIDE MONGODB_URI in .env');
}

mongoose.connect(process.env.MONGODB_URI).then(() =>{
  console.log('connected to database :D')
})

const port = 8080;
const server = app.listen(port, () => {
  console.log(`server is running on port: ${port}`)

});