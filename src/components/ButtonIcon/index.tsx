import React from 'react'
import { BorderlessButtonProps } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import { SvgProps } from 'react-native-svg'
import * as S from './styles'

export interface ButtonIconProps extends BorderlessButtonProps {
  svg: React.FC<SvgProps>
  text?: string
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  fillColor?: 'transparent' | 'green' | 'white'
  withBorder?: boolean
  onlyIcon?: boolean
}

export const selectSizeIcon = (
  sizeIcon: 'xsmall' | 'small' | 'medium' | 'large',
  // eslint-disable-next-line consistent-return
) => {
  // eslint-disable-next-line default-case
  switch (sizeIcon) {
    case 'xsmall':
      return RFValue(8)
    case 'small':
      return RFValue(14)
    case 'medium':
      return RFValue(24)
    case 'large':
      return RFValue(30)
  }
}

export const ButtonIcon = ({
  svg: Svg,
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
          <Svg
            testID="icon"
            width={selectSizeIcon(size)}
            height={selectSizeIcon(size)}
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
            width={selectSizeIcon(size)}
            height={selectSizeIcon(size)}
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
