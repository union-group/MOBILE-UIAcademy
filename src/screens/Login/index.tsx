import React from 'react'
import { Dimensions } from 'react-native'
import { ButtonSocial } from '../../components/Buttons/ButtonSocial'

import FacebookSvg from '../../assets/facebook.svg'
import GoogleSvg from '../../assets/google.svg'
import LogoPng from '../../assets/logo.png'

import * as S from './styles'

export const Login = () => {
  const { height } = Dimensions.get('window')

  return (
    <S.Container testID="containerLogin">
      <S.ImageLogo source={LogoPng} />
      <S.Info windowHeight={height}>
        Entre para ter acesso aos{'\n'}
        melhores cursos.
      </S.Info>

      <S.WrapperHr>
        <S.Hr />
        <S.TextHr>Entrar com</S.TextHr>
        <S.Hr />
      </S.WrapperHr>

      <S.WrapperSocial windowHeight={height}>
        <ButtonSocial title="Google" svg={GoogleSvg} />
        <ButtonSocial title="Facebook" svg={FacebookSvg} />
      </S.WrapperSocial>
    </S.Container>
  )
}
