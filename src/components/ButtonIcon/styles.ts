import {
  BorderlessButton,
  BorderlessButtonProps,
} from 'react-native-gesture-handler'
// eslint-disable-next-line import/no-extraneous-dependencies
import { AntDesign } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css, DefaultTheme } from 'styled-components/native'

type Props = BorderlessButtonProps & {
  title?: string
  size?: 'xsmall' | 'small' | 'medium'
  directionIcon?: 'left' | 'right'
  fillColor?: 'green' | 'white'
  withBorder?: boolean
  onlyIcon?: boolean
}

const iconModifiers = {
  xsmall: () => css`
    font-size: ${RFValue(12)}px;
  `,
  small: () => css`
    font-size: ${RFValue(20)}px;
  `,
  medium: () => css`
    font-size: ${RFValue(24)}px;
  `,
}

const WrapperContainerModifiers = {
  xsmall: () => css`
    padding: ${RFValue(10)}px;
  `,
  small: () => css`
    padding: ${RFValue(12)}px;
  `,
  medium: () => css`
    padding: ${RFValue(25)}px;
  `,
}

const TextModifiers = {
  xsmall: (theme: DefaultTheme, directionIcon = 'left') => css`
    ${directionIcon === 'left'
      ? css`
          padding-right: ${RFValue(10)}px;
        `
      : css`
          padding-left: ${RFValue(10)}px;
        `}
    font-size: ${RFValue(theme.fonts.sizes.xsmall)}px;
  `,
  small: (theme: DefaultTheme, directionIcon = 'left') => css`
    ${directionIcon === 'left'
      ? css`
          padding-right: ${RFValue(12)}px;
        `
      : css`
          padding-left: ${RFValue(12)}px;
        `}
    font-size: ${RFValue(theme.fonts.sizes.small)}px;
  `,
  medium: (theme: DefaultTheme, directionIcon = 'left') => css`
    ${directionIcon === 'left'
      ? css`
          padding-right: ${RFValue(25)}px;
        `
      : css`
          padding-left: ${RFValue(25)}px;
        `}
    font-size: ${RFValue(theme.fonts.sizes.medium)}px;
  `,
}

export const Container = styled.View<Props>`
  ${({ size, title, directionIcon, onlyIcon }) => css`
    align-items: center;
    justify-content: center;

    ${!!size && WrapperContainerModifiers[size]};

    ${!!title &&
    directionIcon === 'left' &&
    css`
      padding-right: 0;
    `};

    ${!!title &&
    directionIcon === 'right' &&
    css`
      padding-left: 0;
    `};

    ${!!onlyIcon &&
    css`
      padding: 0;
    `};
  `}
`
export const Icon = styled(AntDesign)<Props>`
  ${({ size }) => css`
    ${!!size && iconModifiers[size]};
  `}
`

export const WrapperIcon = styled.View<Props>`
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

export const WrapperContainer = styled(BorderlessButton)<Props>`
  ${({ theme, fillColor }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.borderRadius[2]}px;

    ${!!fillColor &&
    fillColor === 'green' &&
    css`
      background-color: ${theme.colors.primary};
    `};

    ${!!fillColor &&
    fillColor === 'white' &&
    css`
      background-color: ${theme.colors.secondary};
    `};
  `}
`

export const Text = styled.Text<Props>`
  ${({ theme, size, directionIcon }) => css`
    font-family: ${theme.fonts.medium};

    ${directionIcon === 'left'
      ? css`
          padding-left: ${RFValue(6)}px;
        `
      : css`
          padding-right: ${RFValue(6)}px;
        `}

    ${!!size && TextModifiers[size](theme, directionIcon)};
  `}
`
