import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Example } from '../screens/Example'

const { Navigator, Screen } = createStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Example" component={Example} />
    </Navigator>
  )
}
