import { 
FETCH_HOUSES,
CREATE_HOUSES
} from './types'

import axios from 'axios'

export const fetchHouses = () => {
  return async dispatch => {

    try {
      const result = await fetch('http://localhost:5000/api/houses/');

      const resultData = await result.json()

      console.log(resultData)

      dispatch({
        type: FETCH_HOUSES, 
        payload: 1
      })
    } catch(err) {
      console.log('THIS IS THE ERROR', err)
    }
  }
}