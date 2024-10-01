import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'lightseagreen',
        tabBarInactiveTintColor: 'lightgrey',
        tabBarStyle: {
          borderTopWidth: 0
        },
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold'
        },
        headerStatusBarHeight: 0
      }}
    >
      <Tab.Screen
        name={'Current'}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="droplet" size={size} color={color} />
          )
        }}
      >
        {() => <CurrentWeather weather={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Upcoming'}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" size={size} color={color} />
          )
        }}
      >
        {() => <UpcomingWeather weather={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          )
        }}
      >
        {() => <City weather={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs
