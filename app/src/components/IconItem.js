import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconItem = (props) => {
  const {
    iconName,
    iconSize,
    iconColor,
    text,
    fontSize,
    color,
    flexDirection,
    width
  } = props
  return (
    <View style={[styles.container, { flexDirection, width }]}>
      <Feather
        name={iconName}
        size={iconSize ?? 24}
        color={iconColor ?? 'white'}
      />
      <Text style={[styles.text, { fontSize }]}>{text}</Text>
    </View>
  )
}

export default IconItem

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'floralwhite'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '20%'
  }
})
