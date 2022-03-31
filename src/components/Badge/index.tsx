import React from 'react'

import * as S from './styles'

export interface BadgeProps {
  text: string
  withCircle?: boolean
}

export const Badge = ({ text, withCircle = false }: BadgeProps) => {
  return (
    <S.Container testID="container" withCircle={withCircle}>
      {withCircle && <S.CircleFilled testID="circleFilled" />}
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}
