import React from 'react'
import { BorderlessButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

import { selectSizeIcon } from '../../../utils/selectSizeIcon'

import * as S from './styles'

export interface ButtonIconProps extends BorderlessButtonProps {
  svg: React.FC<SvgProps>
  text?: string
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  sizeIcon?: 'xsmall' | 'small' | 'medium' | 'large'
  fillColor?: 'transparent' | 'green' | 'white'
  withBorder?: boolean
  onlyIcon?: boolean
}

export const ButtonIcon = ({
  svg: Svg,
  text,
  size = 'medium',
  sizeIcon = 'medium',
  fillColor = 'transparent',
  withBorder = true,
  onlyIcon = false,
  ...rest
}: ButtonIconProps) => {
  if (onlyIcon) {
    return (
      <S.WrapperContainer size={size} {...rest}>
        <S.Container testID="button-icon" onlyIcon>
          <Svg
            testID="icon"
            width={selectSizeIcon(sizeIcon)}
            height={selectSizeIcon(sizeIcon)}
          />
        </S.Container>
      </S.WrapperContainer>
    )
  }

  return (
    <S.WrapperIcon withBorder={withBorder}>
      <S.WrapperContainer fillColor={fillColor} size={size} {...rest}>
        <S.Container testID="button-icon" text={text}>
          <Svg
            testID="icon"
            width={selectSizeIcon(sizeIcon)}
            height={selectSizeIcon(sizeIcon)}
          />
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
