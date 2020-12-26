import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';


const HomeDetailScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>Modern House</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/images/house.jpg')}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Home Type:</Text>
          <Text style={styles.value}>Flat</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Price:</Text>
          <Text style={styles.value}>$2.000.000,00</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Year Build:</Text>
          <Text style={styles.value}>2020</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>This is some address</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Decription:</Text>
          <Text style={styles.value}>This is some description</Text>
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20, 
  }, 
  heading: {
    marginHorizontal: 20, 
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
  },
  image: {
    width: '100%', 
    height: 200
  },
  group: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    fontSize: 18
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink: 1
  }
});

export default HomeDetailScreen