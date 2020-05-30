import React, {useState} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import Button from '../components/button'

const MainScreen = (props) => {
  const [coinResult, setCoinResult] = useState('H')

  const flipACoin = () => {
    const random = Math.floor(Math.random() * 2) + 1
    console.log(random)

    if (random == 1) {
      setCoinResult('H')
    } else {
      setCoinResult('T ')
    }
  }

  return (
    <View style={styles.container}>
      {coinResult == 'H' ? (
        <Image
          source={require('../assets/coin_h.png')}
          style={styles.imgStyle}
        />
      ) : (
        <Image
          source={require('../assets/coin_t.png')}
          style={styles.imgStyle}
        />
      )}

      <Button title="Flip a Coin" onPress={flipACoin} style={styles.button} />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: 150,
    height: 150,
  },
  button: {
    margin: 10,
  },
})
