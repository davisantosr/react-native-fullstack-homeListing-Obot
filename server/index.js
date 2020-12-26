const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()


const app = express();

app.use(express.json())

const port = process.env.PORT || 3000;

mongoose.connect(`mongodb+srv://home-listing-user:${process.env.DB_PASSWORD}@cluster0.tbrmp.mongodb.net/house_app?retryWrites=true&w=majority`)
  .then(result => {
    
    app.listen(port, () => console.log(`Server is running on port ${port}`))

  })
  .catch(err => console.log(err))

