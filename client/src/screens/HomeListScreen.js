import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FloatingAction } from 'react-native-floating-action'

import Card from '../components/Card'



const HomeListScreen = () => {
  return (
    <View style={styles.container}>
      <Card />
      <FloatingAction
        position='right'
        animated={false}
        showBackground={false}
        onPressMain={() => console.log('Button pressed')}
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