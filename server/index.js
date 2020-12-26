const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.get('/api/listing', (req, res) => {
  res.send([{id: 1, roomType: 'Gold'}, {id:2, roomType: 'Flat'}])
})

app.listen(3000, () => console.log('Server on port 3000'))
