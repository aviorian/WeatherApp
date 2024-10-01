import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet, SectionList } from 'react-native'
import ListItem from '../components/ListItem'
import moment from 'moment'

const empty = () => {
  return (
    <View>
      <Text>There is no data available.</Text>
    </View>
  )
}

const renderItem = ({ item }) => {
  // Now directly access the weather data fields
  if (!item) return null

  return (
    <ListItem
      dt={item.dt_txt}
      temp_min={item.main.temp_min}
      temp_max={item.main.temp_max}
      condition={item.weather[0].description}
      weatherType={item.weather[0].main}
    />
  )
}

const UpcomingWeather = ({ weather }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    // Log the incoming weather data
    console.log('weather:', weather)

    const groupedData = weather.reduce((acc, curr) => {
      const day = moment(curr.dt_txt).format('dddd')
      const existingDay = acc.find((item) => item.day === day)

      if (existingDay) {
        existingDay.data.push(curr)
      } else {
        acc.push({
          day,
          data: [curr]
        })
      }

      return acc
    }, [])

    // Log the grouped data to see the final structure
    console.log('groupedData:', groupedData)

    setData(groupedData)
  }, [weather])

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.body}>
        <Text style={styles.headline}>Upcoming Weather</Text>
        <SectionList
          sections={data}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.day}</Text>
          )}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          ListEmptyComponent={empty}
        />
      </View>
    </SafeAreaView>
  )
}

export default UpcomingWeather

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  body: {
    margin: 20
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    paddingVertical: 5,
    paddingHorizontal: 10
  }
})
