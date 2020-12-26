import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { FloatingAction } from 'react-native-floating-action'

import Card from '../components/Card'

import * as houseAction from '../redux/actions/houseActions'

const HomeListScreen = props => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(houseAction.fetchHouses())
  }, [dispatch])

  return (
    <View style={styles.container}>
      <Card
        navigation={props.navigation}
      />
      <FloatingAction
        position='right'
        animated={false}
        showBackground={false}
        onPressMain={() => props.navigation.navigate('AddHome')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

});

export default HomeListScreen