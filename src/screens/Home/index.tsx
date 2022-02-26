import React from 'react'

import logo from '../../assets/logo.png'

import * as S from './styles'

export const Home = () => {
  return (
    <S.Container>
      <S.Logo source={logo} />
      <S.Text>
        Hello World {'\n'}
        Union Group
      </S.Text>
    </S.Container>
  )
}
