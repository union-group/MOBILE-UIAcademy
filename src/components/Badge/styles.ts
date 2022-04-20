import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css, DefaultTheme } from 'styled-components/native'

import { BadgeProps } from '.'

type ContainerProps = Pick<BadgeProps, 'withCircle'>

const containerModifiers = {
  withFill: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
    min-width: ${RFValue(67)}px;
  `,
  withoutFill: (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.neutral};
    min-width: ${RFValue(78)}px;
  `,
}

export const Container = styled.View<ContainerProps>`
  ${({ theme, withCircle }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius[4]}px;
    padding: 5px ${RFValue(theme.spacings.xsmall)}px;

    ${withCircle
      ? containerModifiers.withoutFill(theme)
      : containerModifiers.withFill(theme)}
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${theme.fonts.sizes.xsmall}px;
    line-height: ${RFValue(16)}px;
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xsmall}px;
  `}
`

export const CircleFilled = styled.View`
  ${({ theme }) => css`
    width: ${RFValue(7)}px;
    height: ${RFValue(7)}px;
    background-color: ${theme.colors.black};
    border-radius: 3.5px;
    margin-right: ${RFValue(theme.spacings.xsmall)}px;
  `}
`
