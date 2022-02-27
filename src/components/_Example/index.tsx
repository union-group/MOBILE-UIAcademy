import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

export interface ExampleProps
  extends Omit<TouchableOpacityProps, 'title'> {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
}

export const Example = ({
  children,
  color = 'primary',
  ...rest
}: ExampleProps) => {
  return (
    <S.Container color={color} {...rest}>
      <S.Text>{children}</S.Text>
    </S.Container>
  )
}
