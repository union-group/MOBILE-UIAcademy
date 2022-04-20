/* eslint-disable react/style-prop-object */
import React from 'react'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Epilogue_400Regular,
  Epilogue_500Medium,
  Epilogue_600SemiBold,
} from '@expo-google-fonts/epilogue'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'

import { theme } from './src/styles/theme'

import { Routes } from './src/routes'

import { AppProvider } from './src/hooks'

export default function App() {
  const [fontsLoaded] = useFonts({
    Epilogue_400Regular,
    Epilogue_500Medium,
    Epilogue_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <StatusBar style="dark" />
        <Routes />
      </AppProvider>
    </ThemeProvider>
  )
}
