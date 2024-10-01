import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs.js'
import { useGetWeatherData } from './src/hooks/useGetWeatherData.js'
import ErrorScreen from './src/screens/ErrorScreen.js'

const Index = () => {
  const [loading, errorMsg, weather] = useGetWeatherData()

  console.log('aaa')

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer independent={true}>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
  if (errorMsg) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{errorMsg}</Text>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {loading ? (
        <ActivityIndicator size="large" color="lightseagreen" />
      ) : (
        <ErrorScreen />
      )}
    </View>
  )
}

export default Index
