const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const houses = require('./routes/houses')

require('dotenv').config()

const app = express();

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the house listing API')
})

app.use('/api/houses', houses);

const port = process.env.PORT || 3000;

mongoose.connect(`mongodb+srv://home-listing-user:${process.env.DB_PASSWORD}@cluster0.tbrmp.mongodb.net/house_app?retryWrites=true&w=majority`)
  .then(result => {
    
    app.listen(port, () => console.log(`Server is running on port ${port}`))

  })
  .catch(err => console.log(err))

