import React from 'react'
import { ButtonIcon } from '../../components/ButtonIcon'

import * as S from './styles'

export const Home = () => {
  function handleTest() {
    console.log('teste inicial do click do botão')
  }
  return (
    <S.Container>
      <S.Text>
        Hello World {'\n'}
        Union Group
      </S.Text>

      <ButtonIcon action={handleTest} iconName="search" />
    </S.Container>
  )
}
