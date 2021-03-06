require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const router = require('./routes/routes')

const corsOptions = {
  allowedHeaders: ['twitterauth']
}

mongoose.connect('mongodb://localhost/twitterDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => console.log('logged into database'))

const app = express();

app.use(cors(corsOptions))
const port = 3000;

app.use(bodyParser.json())

app.use('/', router)



// app.get('/', (req, res) => {
//   res.send('Hello World! from APIs')
// })
//
//
// app.post('/', (req, res) => {
//   let {body} = req;
//   res.send(`My name is ${body.name}`)
// })

app.listen(3000)