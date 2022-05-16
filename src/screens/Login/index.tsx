/* eslint-disable react/no-children-prop */
import React, { useState } from 'react'
import { Alert, Dimensions } from 'react-native'
import { Logo } from '../../components/Brand/Logo'
import { Button } from '../../components/Buttons/Button'
import { ButtonSocial } from '../../components/Buttons/ButtonSocial'
import { Input } from '../../components/Form/Input'

import FacebookSvg from '../../assets/facebook.svg'
import GoogleSvg from '../../assets/google.svg'

import * as S from './styles'
import { useAuth } from '../../hooks/useAuth'

export const Login = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const { height } = Dimensions.get('window')

  const { signIn } = useAuth()

  function handleForgotPassword() {
    // code para 'Esqueci minha senha'
  }

  function handleCreateAccount() {
    // code para 'Cria conta'
  }

  function handleValidateUser() {
    if (!userEmail || !userPassword) {
      Alert.alert('Aviso', 'E-mail e/ou senha não podem estar vazios')
    } else {
      signIn(userEmail, userPassword)
    }
  }

  return (
    <S.ScrollViewContainer>
      <S.Container testID="containerLogin">
        <Logo color="black" size="large" />
        <S.Info windowHeight={height}>
          Entre para ter acesso{'\n'}
          aos melhores cursos.
        </S.Info>

        <Input
          label="Email"
          placeholder="Digite seu email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={setUserEmail}
          value={userEmail}
        />

        <Input
          label="Senha"
          placeholder="Digite sua senha"
          variant="password"
          onChangeText={setUserPassword}
          value={userPassword}
        />

        <S.WrapperForgotPassword>
          <S.LinkUrl onPress={handleForgotPassword}>
            <S.Text>Esqueci minha senha</S.Text>
          </S.LinkUrl>
        </S.WrapperForgotPassword>

        <S.WrapperButton windowHeight={height}>
          <Button
            testID="buttonValidateUser"
            children="Entrar"
            size="fullWidth"
            onPress={handleValidateUser}
          />
        </S.WrapperButton>

        <S.WrapperHr>
          <S.Hr />
          <S.TextHr>ou entre com</S.TextHr>
          <S.Hr />
        </S.WrapperHr>

        <S.WrapperSocial windowHeight={height}>
          <ButtonSocial title="Google" svg={GoogleSvg} />
          <ButtonSocial title="Facebook" svg={FacebookSvg} />
        </S.WrapperSocial>

        <S.Footer>
          <S.TextFooter>Não é registrado?</S.TextFooter>
          <S.WrapperCreateAccount>
            <S.LinkUrl onPress={handleCreateAccount}>
              <S.TextFooter textBold>Crie uma conta</S.TextFooter>
            </S.LinkUrl>
          </S.WrapperCreateAccount>
        </S.Footer>
      </S.Container>
    </S.ScrollViewContainer>
  )
}
