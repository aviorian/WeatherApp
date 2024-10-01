import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconItem from '../components/IconItem'

const City = ({ weather }) => {
  console.log('City', weather)
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{weather.name}</Text>

      <Text style={styles.country}>{weather.country}</Text>
      <IconItem
        iconName="users"
        text={weather.population}
        fontSize={24}
        flexDirection="row"
        width="25%"
      />
      <View style={styles.sunTimeContainer}>
        <IconItem
          iconName="sunrise"
          text={`Sunrise: ${convertTimestampToTime(weather.sunrise)}`}
          fontSize={18}
          iconSize={30}
          iconColor="gold"
          flexDirection="column"
          width="50%"
        />
        <IconItem
          iconName="sunset"
          text={`Sunset: ${convertTimestampToTime(weather.sunset)}`}
          fontSize={18}
          iconSize={30}
          iconColor="orange"
          flexDirection="column"
        />
      </View>
    </View>
  )
}

const convertTimestampToTime = (timestamp) => {
  const date = new Date(timestamp * 1000) // Multiply by 1000 to convert from seconds to milliseconds
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

export default City

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sunTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    alignItems: 'center'
  },

  cityName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white'
  },
  country: {
    fontSize: 24,
    color: 'floralwhite'
  }
})
