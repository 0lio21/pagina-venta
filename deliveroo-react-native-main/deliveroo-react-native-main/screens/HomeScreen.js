import { View, Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Wru from '../assets/wru.png'
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline'
import Categories from '../components/categories'
import FeaturedRow from '../components/featuredRow'




const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: 'TESTING
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.flexSpace}>
        <Image source={Wru} style={styles.img} />
        <View style={{ flex: 1, marginLeft: 4 }}>
          <Text style={{ color: 'gray' }}>
            Deliver Now!
          </Text>
          <View style={styles.flex}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
              Current Location 
            </Text>
            <ChevronDownIcon size={20} color="green"/>
          </View>
        </View>
        <UserIcon size={30} color="green" />
      </View>
      <View style={styles.flexSpace}>
      {/* Search */}
        <View style={styles.search}>
          <MagnifyingGlassIcon size={25} color="gray" />
          <TextInput placeholder='Buscar restaurante!' keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon size={25} color='green' />
      </View>


      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
          backgroundColor: '#e8e8e88b'
        }}
      >

        <Categories />


        <FeaturedRow 
          id='1'
          title='featured'
          description='Paid placements from our partners'
        />

        <FeaturedRow 
          id='2'
          title='Tasty Discounts'
          description='Paid placements from our partners'
        />

        <FeaturedRow 
          id='3'
          title='Offers near your!'
          description='Paid placements from our partners'
        />
        
        <FeaturedRow 
          id='4'
          title='featured'
          description='Paid placements from our partners'
        />

      </ScrollView>

    </SafeAreaView>
  )
}


export default HomeScreen


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 5,
  },
  flexSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },  
  img: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    borderRadius: 25,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    flex: 1,
    borderRadius: 2,
    padding: 3,
    overflow: 'hidden',
  }
})