import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css, DefaultTheme } from 'styled-components/native'

import { ButtonProps } from '.'

type ContainerProps = Omit<ButtonProps, 'children'>
type TextProps = Omit<ButtonProps, 'children'>

const containerModifiers = {
  small: () => css`
    width: ${RFValue(160)}px;
    height: ${RFValue(42)}px;
  `,
  medium: () => css`
    width: ${RFValue(295)}px;
    height: ${RFValue(42)}px;
  `,
  large: () => css`
    width: ${RFValue(300)}px;
    height: ${RFValue(54)}px;
  `,
  fullWidth: () => css`
    width: 100%;
    height: ${RFValue(54)}px;
  `,
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
  black: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.black};
  `,
}

export const Container = styled(RectButton)<ContainerProps>`
  ${({ theme, color, size }) => css`
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius[1]}px;

    ${!!size && containerModifiers[size]()};
    ${!!color && containerModifiers[color](theme)};
  `}
`

export const Text = styled.Text<TextProps>`
  ${({ theme, color }) => css`
    font-size: ${RFValue(theme.fonts.sizes.medium)}px;
    line-height: ${RFValue(20)}px;
    font-family: ${theme.fonts.medium};
    color: ${color === 'primary'
      ? theme.colors.black
      : theme.colors.secondary};
  `}
`
