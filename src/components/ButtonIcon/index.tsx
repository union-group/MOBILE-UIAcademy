import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { AntDesign } from '@expo/vector-icons'

import { BorderlessButtonProps } from 'react-native-gesture-handler'
import * as S from './styles'

export interface ButtonIconProps extends BorderlessButtonProps {
  action: () => void
  iconName: keyof typeof AntDesign.glyphMap
  title?: string
  size?: 'xsmall' | 'small' | 'medium'
  directionIcon?: 'left' | 'right'
  fillColor?: 'green' | 'white'
  withBorder?: boolean
  onlyIcon?: boolean
}

export const ButtonIcon = ({
  action,
  iconName,
  title,
  size = 'small',
  directionIcon = 'left',
  fillColor,
  withBorder = true,
  onlyIcon = false,
  ...rest
}: ButtonIconProps) => {
  if (onlyIcon) {
    return (
      <S.WrapperContainer onPress={action} size={size} {...rest}>
        <S.Container testID="button-icon" size={size} onlyIcon>
          <S.Icon testID="icon" name={iconName} size={size} />
        </S.Container>
      </S.WrapperContainer>
    )
  }

  return (
    <S.WrapperIcon withBorder={withBorder}>
      <S.WrapperContainer
        onPress={action}
        fillColor={fillColor}
        size={size}
        {...rest}
      >
        {directionIcon === 'left' && (
          <S.Container
            testID="button-icon"
            size={size}
            title={title}
            directionIcon={directionIcon}
          >
            <S.Icon testID="icon" name={iconName} size={size} />
          </S.Container>
        )}
        {title && (
          <S.Text
            testID="text-icon"
            size={size}
            directionIcon={directionIcon}
          >
            {title}
          </S.Text>
        )}
        {directionIcon === 'right' && (
          <S.Container
            testID="button-icon"
            size={size}
            title={title}
            directionIcon={directionIcon}
          >
            <S.Icon testID="icon" name={iconName} size={size} />
          </S.Container>
        )}
      </S.WrapperContainer>
    </S.WrapperIcon>
  )
}
