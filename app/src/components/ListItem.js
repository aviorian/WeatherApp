import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { WeatherType } from '../utilities/WeatherType'
import ColumnItem from './ColumnItem'
import moment from 'moment'

const ListItem = (props) => {
  const { dt, temp_min, temp_max, condition, weatherType } = props

  return (
    <View style={styles.itemView}>
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <Text style={styles.date}>{moment(dt).format('dddd')}</Text>
        <Text style={styles.date}>{moment(dt).format('LTS')}</Text>
      </View>
      <View style={styles.itemRow}>
        <Feather name={WeatherType[weatherType].icon} size={50} color="white" />
        <ColumnItem
          messageOne={'Min:'}
          fontSizeMessageOne={16}
          messageTwo={temp_min}
          fontSizeMessageTwo={24}
          colorMessageOne="white"
          colorMessageTwo="white"
        />

        <ColumnItem
          messageOne={'Max:'}
          fontSizeMessageOne={16}
          messageTwo={temp_max}
          fontSizeMessageTwo={24}
          colorMessageOne="white"
          colorMessageTwo="white"
        />

        <Text style={styles.condition}>{condition}</Text>
      </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  temp: {
    color: 'white',
    fontSize: 24
  },
  condition: {
    color: 'white',
    fontSize: 18
  },
  date: {
    color: 'white',
    fontSize: 14
  },

  itemView: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    marginVertical: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'column',
    paddingVertical: 5
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
