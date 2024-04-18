import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'


const RestaunatCard = ({ 
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
}) => {
  return (
    <TouchableOpacity style={styles.content}>
      <Image 
        source={imgUrl}
        style={styles.img}
      />
      <View>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.contentStar}>
          <StarIcon size={15} color="green" />
          <Text style={{ color: "gray", fontSize: 12 }}>
            <Text style={{ color: "green" }}>{rating}</Text> - {genre}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 5, paddingBottom: 2 }}>
          <MapPinIcon color='gray' opacity={0.4} size={20} />
          <Text style={{ fontSize: 12 }}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaunatCard


const styles = StyleSheet.create({
  content: {
    marginRight: 4,
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: 'hidden',
  },  
  img: {
    height:  80,
    width: 190
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 10
  },
  contentStar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    fontSize: 12,
  }
})