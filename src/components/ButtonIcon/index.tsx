import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { AntDesign } from '@expo/vector-icons'

import { BorderlessButtonProps } from 'react-native-gesture-handler'
import * as S from './styles'

export interface ButtonIconProps extends BorderlessButtonProps {
  iconName: keyof typeof AntDesign.glyphMap
  text?: string
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  fillColor?: 'transparent' | 'green' | 'white'
  withBorder?: boolean
  onlyIcon?: boolean
}

export const ButtonIcon = ({
  iconName,
  text,
  size = 'medium',
  fillColor = 'transparent',
  withBorder = true,
  onlyIcon = false,
  ...rest
}: ButtonIconProps) => {
  if (onlyIcon) {
    return (
      <S.WrapperContainer size={size} {...rest}>
        <S.Container testID="button-icon" onlyIcon>
          <S.Icon testID="icon" name={iconName} size={size} />
        </S.Container>
      </S.WrapperContainer>
    )
  }

  return (
    <S.WrapperIcon withBorder={withBorder}>
      <S.WrapperContainer fillColor={fillColor} size={size} {...rest}>
        <S.Container testID="button-icon" text={text}>
          <S.Icon testID="icon" name={iconName} size={size} />
        </S.Container>

        {!!text && (
          <S.Text testID="text-icon" size={size}>
            {text}
          </S.Text>
        )}
      </S.WrapperContainer>
    </S.WrapperIcon>
  )
}
