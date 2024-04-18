import { ScrollView } from 'react-native'
import React from 'react'

import tick1 from '../../assets/tick1.png'
import tick2 from '../../assets/tick2.png'
import tick3 from '../../assets/tick3.png'
import tick4 from '../../assets/tick4.png'
import tike5 from '../../assets/tike5.png'
import tike6 from '../../assets/tike6.png'
import tike7 from '../../assets/tike7.png'
import tike8 from '../../assets/tike8.png'
import CategoriesCard from './CategoriesCard'


const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 8,
        paddingVertical: 6
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoriesCard imgUrl={tick4} title="title 1" />
      <CategoriesCard imgUrl={tike5} title="title 2" />
      <CategoriesCard imgUrl={tick1} title="title 3" />
      <CategoriesCard imgUrl={tike6} title="title 4" />
      <CategoriesCard imgUrl={tick2} title="title 5" />
      <CategoriesCard imgUrl={tike7} title="title 6" />
      <CategoriesCard imgUrl={tike8} title="title 7" />
      <CategoriesCard imgUrl={tick3} title="title 8" />

    </ScrollView>
  )
}

export default Categories