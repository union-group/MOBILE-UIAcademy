import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

export interface ButtonProps
  extends Omit<TouchableOpacityProps, 'title'> {
  children: React.ReactNode
  color?: 'purple' | 'blue'
}

export const Button = ({
  children,
  color = 'purple',
  ...rest
}: ButtonProps) => {
  return (
    <S.Container color={color} {...rest}>
      <S.Text>{children}</S.Text>
    </S.Container>
  )
}
