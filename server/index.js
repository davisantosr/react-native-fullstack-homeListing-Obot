const express = require('express');
require('dotenv').config()

const app = express();

app.use(express.json())

const homes = [
  {
    id:1, 
    type:'apartment', 
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam minima amet rem?'
  },
  {
    id:2, 
    type:'flat', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam soluta enim totam ut dolor magnam?'
  } 

]

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.get('/api/listing', (req, res) => {
  res.send(homes)
})

app.get('/api/listing/:id', (req, res) => {
  const home = homes.find(home => home.id ===  parseInt(req.params.id))
  
  if(!home) {
    res.status(404).send('The home with the given id was not found')
  }
  res.send(home);
})


app.post('/api/listing', (req, res) => {
  const home = {
    id: homes.length + 1,
    type: req.body.type, 
    description: req.body.description 
  }

  homes.push(home);
  res.send(home);

})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`))
