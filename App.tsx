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

export default function App() {
  const test = ''

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
      <StatusBar style="dark" />
      <Routes />
    </ThemeProvider>
  )
}
