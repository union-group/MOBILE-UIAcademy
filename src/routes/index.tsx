import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/useAuth'
import { TabRoutes } from './tab.routes'

export const Routes = () => {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      {user.id ? <TabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
