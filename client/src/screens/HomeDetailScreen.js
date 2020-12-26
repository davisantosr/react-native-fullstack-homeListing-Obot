import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';


const HomeDetailScreen = () => {
  return (
    <ScrollView>
      <View style={styles.contaiener}>
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
          <Text styles={styles.value}>Flat</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Price:</Text>
          <Text styles={styles.value}>$2.000.000,00</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Year Build:</Text>
          <Text styles={styles.value}>2020</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Address:</Text>
          <Text styles={styles.value}>This is some address</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Decription:</Text>
          <Text styles={styles.value}>This is some description</Text>
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  
});

export default HomeDetailScreen