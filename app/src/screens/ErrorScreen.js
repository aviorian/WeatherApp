import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ErrorScreen = () => {
  const { container } = styles
  return (
    <View style={container}>
      <Feather name="alert-triangle" size={100} color="red" />
      <Text style={{ fontSize: 24 }}>Something went wrong</Text>
    </View>
  )
}

export default ErrorScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
