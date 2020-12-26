const express = require('express');
const { check, validationResult } = require('express-validator')

const House = require('../models/House')

const router = express.Router();

const validate = [
  [
    check('title').isLength({min: 3, max: 50})
    .withMessage('Title should have 3 to 50 characters'),

    check('description').isLength({min: 10, max: 200})
    .withMessage('Title should have 10 to 200 characters'),

    check('address').isLength({min: 10, max: 100})
    .withMessage('Title should have 10 to 100 characters'),

    check('homeType').isLength({min: 10, max: 100})
    .withMessage('Title should have 10 to 100 characters'),

    check('price').isNumeric()
    .withMessage('The price should be a number'),
  ]

]

router.post('/', validate, (req, res) => {

  const errors = validationResult(req)

  if(!errors.isEmpty()) {
    return res.status(422).send({'errors': errors.array()})
  }

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
