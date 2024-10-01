import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import * as Location from 'expo-location'

export const useGetWeatherData = () => {
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  const WEATHER_API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY

  const getWeather = async () => {
    try {
      console.log(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
      let data = await response.json()
      console.log(data)
      setErrorMsg(data.message)
      setWeather(data)
    } catch (error) {
      setErrorMsg("Couldn't get weather data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      console.log(status)

      if (status !== 'granted') {
        console.log('Permission to access location was denied')
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      console.log(
        'aaa  ' + location.coords.latitude + ' ' + location.coords.longitude
      )

      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
    }

    fetchLocationAndWeather() // Invoke the async function
  }, [])

  useEffect(() => {
    const _ = async () => {
      if (lat && lon) {
        await getWeather(lat, lon) // Call getWeather with lat and lon
      }
    }

    _()
  }, [lat, lon])

  return [loading, errorMsg, weather]
}
