import { 
FETCH_HOUSES,
CREATE_HOUSES
} from './types'

import {IP_NUMBER} from "@env"

import axios from 'axios'

export const fetchHouses = () => {
  return async dispatch => {

    try {
      const result = await fetch(`http://${IP_NUMBER}:5000/api/houses/`);

      const resultData = await result.json()

      console.log(resultData)

      dispatch({
        type: FETCH_HOUSES, 
        payload: resultData
      })
    } catch(err) {
      console.log('THIS IS THE ERROR', err)
    }
  }
}

export const createHome = ({title, image, homeType, price, yearBuild, address, description}) => {
  return async dispatch => {

    const response = await fetch(`http://${IP_NUMBER}:5000/api/houses/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title, 
        address: address, 
        image: image, 
        homeType: homeType, 
        price: price, 
        yearBuild: yearBuild,
        description: description
      })
    })

    const responseData = await response.json();
    console.log(responseData)

    dispatch({
      type: CREATE_HOUSES, 
      payload: responseData
    })

  }
}