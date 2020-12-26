import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';

import { Formik } from 'formik'


const AddHomeScreen = () => {
  
  const [title, setTitle ] = useState('')

  return (
    <ScrollView>

      <Formik
        initialValues={{
          title: '',
          image: '',
          homeType: '',
          price: '', 
          yearBuild: '',
          address: '', 
          description: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {
          (props)=> (
            <View style={styles.form}>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                  style={styles.input} 
                  onChangeText={props.handleChange('title')}
                  value={props.values.title}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>ImageUrl</Text>
                <TextInput 
                  style={styles.input} 
                  onChangeText={props.handleChange('image')}
                  value={props.values.image}
                />
                  
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Type</Text>
                <TextInput 
                  style={styles.input} 
                  onChangeText={props.handleChange('homeType')}
                  value={props.values.homeType}
                  />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Price</Text>
                <TextInput 
                  style={styles.input} 
                  onChangeText={props.handleChange('price')}
                  value={props.values.price}  
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Year Build</Text>
                <TextInput 
                  style={styles.input} 
                  onChangeText={props.handleChange('yearBuild')}
                  value={props.values.yearBuild}  
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Address</Text>
                <TextInput 
                  style={styles.input}
                  onChangeText={props.handleChange('address')}
                  value={props.values.address}
                  multiline
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Description</Text>
                <TextInput 
                  style={styles.input}
                  onChangeText={props.handleChange('description')}
                  value={props.values.description}
                  multiline
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title='Add Home'  
                />
              </View>
            </View>
          )
        }
      </Formik>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  form: {
    margin: 20,
    backgroundColor: '#ffffff',
    padding: 20, 
    borderRadius: 10
  },
  formGroup: {
    width: '100%'
  },
  label:{
    marginVertical: 10
  },
  input: {
    paddingHorizontal: 2, 
    paddingVertical: 8,
    borderBottomColor: '#ccc', 
    borderBottomWidth: 1
  }, 
  buttonContainer: {
    marginTop: 20
  }
});

export default AddHomeScreen