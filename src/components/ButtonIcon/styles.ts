import { BorderlessButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css, DefaultTheme } from 'styled-components/native'
import { ButtonIconProps } from '.'

type WrapperIconProps = Pick<ButtonIconProps, 'withBorder'>
type WrapperContainerProps = Pick<
  ButtonIconProps,
  'size' | 'fillColor'
>
type ContainerProps = Pick<ButtonIconProps, 'text' | 'onlyIcon'>
type TextProps = Pick<ButtonIconProps, 'size'>

export const WrapperIcon = styled.View<WrapperIconProps>`
  ${({ theme, withBorder }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${!!withBorder &&
    css`
      border: 1px solid #e1e1e1;
      border-radius: ${theme.borderRadius[2]}px;
    `}
  `}
`
const WrapperContainerModifiers = {
  small: () => css`
    padding: ${RFValue(10)}px;
  `,
  medium: () => css`
    padding: ${RFValue(12)}px;
  `,
  large: () => css`
    padding: ${RFValue(25)}px;
  `,
  transparent: () => css`
    background-color: transparent;
  `,
  green: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
  white: () => css`
    background-color: white;
  `,
}

export const WrapperContainer = styled(
  BorderlessButton,
)<WrapperContainerProps>`
  ${({ theme, size, fillColor }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.borderRadius[2]}px;

    ${!!size && WrapperContainerModifiers[size]};

    ${!!fillColor && WrapperContainerModifiers[fillColor](theme)};
  `}
`

export const Container = styled.View<ContainerProps>`
  ${({ text, onlyIcon }) => css`
    align-items: center;
    justify-content: center;

    ${!!text &&
    css`
      padding-right: 0;
    `}

    ${!!onlyIcon &&
    css`
      padding: 0;
    `};
  `}
`

const TextModifiers = {
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${RFValue(theme.fonts.sizes.xsmall)}px;
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${RFValue(theme.fonts.sizes.small)}px;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${RFValue(theme.fonts.sizes.medium)}px;
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${RFValue(theme.fonts.sizes.large)}px;
  `,
}

export const Text = styled.Text<TextProps>`
  ${({ theme, size }) => css`
    font-family: ${theme.fonts.medium};
    padding-left: ${RFValue(6)}px;

    ${!!size && TextModifiers[size](theme)};
  `}
`
