/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'

import * as S from './styles'

interface InputProps extends TextInputProps {
  variant?: 'text' | 'password'
  label: string
}

export function Input({
  variant = 'text',
  label,
  ...rest
}: InputProps) {
  const [showVisibility, setShowVisibility] = useState(false)

  function handleVisibilityChange() {
    setShowVisibility((prevState) => !prevState)
  }

  const renderInputText = () => (
    <S.InputText placeholderTextColor="#0B0B0B" {...rest} />
  )

  const renderInputPassword = () => (
    <>
      <S.InputText
        placeholderTextColor="#0B0B0B"
        secureTextEntry={!showVisibility}
        autoCorrect={false}
        {...rest}
      />
      <S.IconContainer
        testID={`icon-${showVisibility ? 'eye-off' : 'eye'}`}
      >
        <BorderlessButton
          testID="icon-button"
          onPress={handleVisibilityChange}
        >
          <Feather
            name={showVisibility ? 'eye-off' : 'eye'}
            size={22}
            color="#0B0B0B"
          />
        </BorderlessButton>
      </S.IconContainer>
    </>
  )

  return (
    <S.Container>
      <S.Wrapper>
        <S.Label>{label}</S.Label>
        {variant === 'text'
          ? renderInputText()
          : renderInputPassword()}
      </S.Wrapper>
    </S.Container>
  )
}
