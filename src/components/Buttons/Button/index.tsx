import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import * as S from './styles'

export interface ButtonProps extends RectButtonProps {
  children: string
  color?: 'primary' | 'black'
  size?: 'small' | 'medium' | 'large' | 'fullWidth'
}

export const Button = ({
  children,
  color = 'primary',
  size = 'medium',
  ...rest
}: ButtonProps) => {
  return (
    <S.Container color={color} size={size} {...rest}>
      <S.Text color={color}>{children}</S.Text>
    </S.Container>
  )
}
