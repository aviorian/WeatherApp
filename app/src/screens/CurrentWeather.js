/* eslint-disable react/prop-types */
import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import RowItem from '../components/RowItem'
import ColumnItem from '../components/ColumnItem'
import { WeatherType } from '../utilities/WeatherType'

const CurrentWeather = ({ weather }) => {
  console.log('CurrentWeather', weather)
  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: WeatherType[weather.weather[0].main].screenColor }
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={WeatherType[weather.weather[0].main].icon}
          size={100}
          color={WeatherType[weather.weather[0].main].backgroundColor}
        />
        <Text style={styles.temp}>{weather.main['temp']}</Text>
        <Text style={styles.feelsLike}>
          Feels like {weather.main.feels_like}
        </Text>
        <RowItem
          messageOne={`High: ${weather.main.temp_max}`}
          messageTwo={`Low : ${weather.main.temp_min}`}
          colorMessageOne={'orange'}
          fontSizeMessageOne={20}
          colorMessageTwo={'darkturquoise'}
          fontSizeMessageTwo={20}
        />
      </View>
      <ColumnItem
        margin={20}
        messageTwo={WeatherType[weather.weather[0].main].message}
        fontSizeMessageTwo={24}
      />
    </SafeAreaView>
  )
}

export default CurrentWeather

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginBottom: 10
  },
  highLowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '40%'
  },

  high: { color: 'orange', fontSize: 20 },
  low: { color: 'aqua', fontSize: 20 },
  temp: {
    fontSize: 48,
    color: 'blue'
  },
  feelsLike: { fontSize: 24 },
  description: { fontSize: 30 },
  message: { fontSize: 24 }
})
