const express = require('express');

const House = require('../models/House')

const router = express.Router();

router.post('/', (req, res) => {
  const house = new House({
    title: req.body.title,
    address: req.body.address, 
    homeType: req.body.homeType, 
    description: req.body.description,
    price: req.body.price,
    image: req.body.image, 
    yearBuild: req.body.yearBuild
  })

  house.save()
    .then(result => {
      res.send({
        message: 'House created successfully',
        data: result
      })
    })
    .catch(err => console.log(err))

})

module.exports = router
