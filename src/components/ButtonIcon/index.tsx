import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons'

import { BorderlessButtonProps } from 'react-native-gesture-handler'
import * as S from './styles'

export interface ButtonIconProps extends BorderlessButtonProps {
  action: () => void
  iconName: keyof typeof Feather.glyphMap
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
  let sizeIcon = 0

  switch (size) {
    case 'xsmall':
      sizeIcon = 12
      break
    case 'small':
      sizeIcon = 20
      break
    case 'medium':
      sizeIcon = 24
      break
    default:
      break
  }

  if (onlyIcon) {
    return (
      <S.WrapperContainer onPress={action} size={size} {...rest}>
        <S.Container size={size} onlyIcon>
          <Feather name={iconName} size={sizeIcon} />
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
      >
        {directionIcon === 'left' && (
          <S.Container
            size={size}
            title={title}
            directionIcon={directionIcon}
          >
            <Feather name={iconName} size={sizeIcon} />
          </S.Container>
        )}
        {title && (
          <S.Text size={size} directionIcon={directionIcon}>
            {title}
          </S.Text>
        )}
        {directionIcon === 'right' && (
          <S.Container
            size={size}
            title={title}
            directionIcon={directionIcon}
          >
            <Feather name={iconName} size={sizeIcon} />
          </S.Container>
        )}
      </S.WrapperContainer>
    </S.WrapperIcon>
  )
}
