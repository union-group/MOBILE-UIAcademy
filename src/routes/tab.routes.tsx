/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'

import HomeIconSvg from '../assets/tabRoutes/home_icon.svg'
import CourseIconSvg from '../assets/tabRoutes/course_icon.svg'
import FavoriteIconSvg from '../assets/tabRoutes/favorite_icon.svg'
import ProfileIconSvg from '../assets/tabRoutes/profile_icon.svg'

import { Home } from '../screens/Home'
import { Courses } from '../screens/Courses'
import { Favorite } from '../screens/Favorite'
import { Profile } from '../screens/Profile'

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.black,
        tabBarInactiveTintColor: theme.colors.black,
        tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          marginBottom: 12,
          fontSize: 12,
        },
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 64,
          borderTopWidth: 0,
          paddingHorizontal: 40,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
      }}
    >
      <Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIconSvg
              width={RFValue(22)}
              height={RFValue(22)}
              fill={focused && theme.colors.black}
            />
          ),
        }}
      />

      <Screen
        name="Cursos"
        component={Courses}
        options={{
          tabBarIcon: ({ focused }) => (
            <CourseIconSvg
              width={RFValue(22)}
              height={RFValue(22)}
              fill={focused && theme.colors.black}
            />
          ),
        }}
      />

      <Screen
        name="Favoritos"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => (
            <FavoriteIconSvg
              width={RFValue(22)}
              height={RFValue(22)}
              fill={focused && theme.colors.black}
            />
          ),
        }}
      />

      <Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <ProfileIconSvg
              width={RFValue(22)}
              height={RFValue(22)}
              fill={focused && theme.colors.black}
            />
          ),
        }}
      />
    </Navigator>
  )
}
