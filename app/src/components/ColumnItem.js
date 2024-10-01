import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ColumnItem = (props) => {
  const {
    messageOne,
    messageTwo,
    colorMessageOne,
    colorMessageTwo,
    fontSizeMessageOne,
    fontSizeMessageTwo,
    margin
  } = props
  return (
    <View style={[styles.body, { margin }]}>
      <Text
        style={[
          styles.message,
          { color: colorMessageOne, fontSize: fontSizeMessageOne }
        ]}
      >
        {messageOne}
      </Text>
      <Text
        style={[
          styles.message,
          { color: colorMessageTwo, fontSize: fontSizeMessageTwo }
        ]}
      >
        {messageTwo}
      </Text>
    </View>
  )
}

export default ColumnItem

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  message: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})
