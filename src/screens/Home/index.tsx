import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Button } from '../../components/Button'

import { NavigationProps } from '../../routes/types/navigation'

import logo from '../../assets/logo.png'

import * as S from './styles'

export const Home = () => {
  const navigation = useNavigation<NavigationProps>()

  function handleNextPage() {
    navigation.navigate('Example')
  }

  return (
    <S.Container>
      <S.Logo source={logo} />
      <S.Text>
        Hello World {'\n'}
        Union Group
      </S.Text>
      <Button onPress={handleNextPage}>Next page</Button>
    </S.Container>
  )
}
