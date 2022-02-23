import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import * as S from './styles'

export interface ButtonProps extends RectButtonProps {
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
