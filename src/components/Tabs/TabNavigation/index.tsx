/* eslint-disable react/no-unstable-nested-components */
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { CommunityContent } from '../TabContent/CommunityContent'
import { MaterialContent } from '../TabContent/MaterialContent'
import { ClassContent } from '../TabContent/ClassContent'

import { styles } from './styles'

const Tab = createMaterialTopTabNavigator()

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Comunidade"
      screenOptions={styles}
    >
      <Tab.Screen name="Comunidade" component={CommunityContent} />
      <Tab.Screen name="Materiais" component={MaterialContent} />
      <Tab.Screen name="Aulas" component={ClassContent} />
    </Tab.Navigator>
  )
}
