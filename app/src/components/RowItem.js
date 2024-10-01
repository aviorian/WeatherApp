import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const RowItem = (props) => {
  const {
    messageOne,
    messageTwo,
    colorMessageOne,
    colorMessageTwo,
    fontSizeMessageOne,
    fontSizeMessageTwo
  } = props
  return (
    <View style={styles.body}>
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

export default RowItem

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 10
  },
  message: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})
