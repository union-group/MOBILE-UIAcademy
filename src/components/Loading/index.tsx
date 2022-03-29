import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'

interface LoadingProps {
  color?: 'primary' | 'secondary' | 'white' | 'black'
  size?: 'small' | 'large'
}

export const Loading = ({
  color = 'primary',
  size = 'large',
}: LoadingProps) => {
  const theme = useTheme()

  return (
    <ActivityIndicator
      testID="loading"
      color={theme.colors[color]}
      size={size}
      style={{ flex: 1 }}
    />
  )
}
