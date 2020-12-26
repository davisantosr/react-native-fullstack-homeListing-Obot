import { 
FETCH_HOUSES,
CREATE_HOUSES
} from './types'

export const fetchHouses = () => {
  return async dispatch => {


    dispatch({
      type: FETCH_HOUSES, 
      payload: 1
    })
  }
}