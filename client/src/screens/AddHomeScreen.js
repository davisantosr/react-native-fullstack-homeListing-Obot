import React, { useState } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  Button,
  KeyboardAvoidingView, 
  Alert,
  ActivityIndicator
} from 'react-native';
import { useDispatch } from 'react-redux'

import { Formik } from 'formik';
import * as yup from 'yup';

import * as houseAction from '../redux/actions/houseActions'


const formSchema = yup.object({
  title: yup.string().required().min(3).max(50),
  price: yup.number().required(), 
  image: yup.string().required(),
  address: yup.string().required(),
  description: yup.string().required(),
  yearBuild: yup.number().required(),

});

const AddHomeScreen = () => {

  const [isLoading, setIsLoading] = useState(false)

  if(isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' />
      </View>
    )

  }

  const dispatch = useDispatch()
  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={100}
      style={{flex: 1}}
    >
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
          validationSchema={formSchema}
          onSubmit={(values) => {

            setIsLoading(true)

            dispatch(houseAction.createHome(values))
              .then(() => {
                setIsLoading(false)
                Alert.alert('Created successfully')

              })
              .catch(err => {
                setIsLoading(false)
                Alert.alert('An error occurred. Try Again', [{text: 'OK'}])
              })
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
                    onBlur={props.handleBlur('title')}
                    value={props.values.title}
                  />
                  <Text style={styles.error}>{props.touched.title && props.errors.title}</Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>ImageUrl</Text>
                  <TextInput 
                    style={styles.input} 
                    onChangeText={props.handleChange('image')}
                    value={props.values.image}
                  />
                  <Text>{props.errors.image}</Text>
                                      
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Type</Text>
                  <TextInput 
                    style={styles.input} 
                    onChangeText={props.handleChange('homeType')}
                    value={props.values.homeType}
                    />
                  <Text>{props.errors.homeType}</Text>

                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Price</Text>
                  <TextInput 
                    style={styles.input} 
                    keyboardType='numeric'
                    onChangeText={props.handleChange('price')}
                    value={props.values.price}  
                  />
                  <Text>{props.errors.price}</Text>

                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Year Build</Text>
                  <TextInput 
                    style={styles.input} 
                    keyboardType='numeric'
                    onChangeText={props.handleChange('yearBuild')}
                    value={props.values.yearBuild}  
                  />
                  <Text>{props.errors.yearBuild}</Text>

                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Address</Text>
                  <TextInput 
                    style={styles.input}
                    onChangeText={props.handleChange('address')}
                    value={props.values.address}
                    multiline
                  />
                  <Text>{props.errors.address}</Text>

                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Description</Text>
                  <TextInput 
                    style={styles.input}
                    onChangeText={props.handleChange('description')}
                    value={props.values.description}
                    multiline
                  />
                  <Text>{props.errors.description}</Text>

                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    title='Add Home'
                    onPress={props.handleSubmit}  
                  />
                </View>
              </View>
            )
          }
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
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
  },
  error: {
    color: 'red'
  }, 
  centered: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default AddHomeScreen