import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { ArrowLongRightIcon } from 'react-native-heroicons/outline'
import RestaunatCard from './RestaunatCard'
import emplatado1 from '../../assets/emplatado1.png'
import emplatado2 from '../../assets/emplatado2.png'
import emplatado8 from '../../assets/emplatado8.png'
import emplatado7 from '../../assets/emplatado7.png'
import emplatado11 from '../../assets/emplatado11.png'
import emplatado12 from '../../assets/emplatado12.png'


const FeatureRow = ({ id, title, description }) => {
  return (
    <View>
      <View style={styles.container}>  
        <Text style={styles.text}>{title}</Text>
        <ArrowLongRightIcon size={20} color="green" />
      </View>
      <Text style={styles.description}>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <RestaunatCard 
          id={123}
          imgUrl={emplatado12}
          title='asadito'
          rating={4.5}
          genre='Argentina papa'
          address='123 Main St'
          short_description='que trae la comida:'
          dishes={{}}
          long={20}
          lat={0}
        />

<RestaunatCard 
          id={123}
          imgUrl={emplatado12}
          title='asadito'
          rating={4.5}
          genre='Argentina papa'
          address='123 Main St'
          short_description='que trae la comida:'
          dishes={{}}
          long={20}
          lat={0}
        />

<RestaunatCard 
          id={123}
          imgUrl={emplatado12}
          title='asadito'
          rating={4.5}
          genre='Argentina papa'
          address='123 Main St'
          short_description='que trae la comida:'
          dishes={{}}
          long={20}
          lat={0}
        />
        <RestaunatCard 
          id={123}
          imgUrl={emplatado12}
          title='asadito'
          rating={4.5}
          genre='Argentina papa'
          address='123 Main St'
          short_description='que trae la comida:'
          dishes={{}}
          long={20}
          lat={0}
        />
        <RestaunatCard 
          id={123}
          imgUrl={emplatado12}
          title='asadito'
          rating={4.5}
          genre='Argentina papa'
          address='123 Main St'
          short_description='que trae la comida:'
          dishes={{}}
          long={20}
          lat={0}
        />
      </ScrollView>


    </View>
  )
}

export default FeatureRow


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 5  
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,

  },  
  description: {
    paddingHorizontal: 10,
    fontSize: 12,
    color: '#888E8F',
  }
})