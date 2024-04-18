import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity
    >
      <Image 
        source={imgUrl}
        style={styles.img}
      />
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard


const styles = StyleSheet.create({
  img: {
    width: 110,
    height: 80,
    margin: 4,
    borderRadius: 5
  },
  text: {
    position: 'absolute',
    bottom: -5,
    right: 10,
    fontWeight: 'bold',
    backgroundColor: 'orange',
    padding: 2,
    borderRadius: 4,
    color: 'white'
  }
})