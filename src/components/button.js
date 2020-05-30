import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Button = (props) => {
  const {title, onPress, style} = props

  return (
    <TouchableOpacity style={[style, styles.button]} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f1c40f',
    padding: 20,
    borderRadius: 4,
  },
})
