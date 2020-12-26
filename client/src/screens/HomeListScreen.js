import React from 'react';
import { View, Text, StyleSheet, Touchble } from 'react-native';

import { FloatingAction } from 'react-native-floating-action'

import Card from '../components/Card'



const HomeListScreen = props => {
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