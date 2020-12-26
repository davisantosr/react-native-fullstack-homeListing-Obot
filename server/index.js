const express = require('express');
require('dotenv').config()

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.get('/api/listing', (req, res) => {
  res.send([{id: 1, roomType: 'Gold'}, {id:2, roomType: 'Flat'}])
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`))
