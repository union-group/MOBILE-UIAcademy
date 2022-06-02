import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AppLoading from 'expo-app-loading'
import { Login } from '../screens/Login'
import { Onboarding } from '../screens/Onboarding'
import { useAuth } from '../hooks/useAuth'

export type RootStackParamList = {
  Login: undefined
  Onboarding: undefined
}

const { Navigator, Screen } = createStackNavigator()

export const AuthRoutes = () => {
  const { viewedOnboarding, loadingAuth } = useAuth()

  if (!loadingAuth) {
    return <AppLoading />
  }

  return (
    <Navigator
      initialRouteName={viewedOnboarding ? 'Login' : 'Onboarding'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Onboarding" component={Onboarding} />
    </Navigator>
  )
}
