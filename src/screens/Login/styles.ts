import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

type ResponsiveProps = {
  windowHeight: number
}

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 ${RFValue(16)}px;
    background-color: ${theme.colors.background};
  `}
`

export const ImageLogo = styled.Image`
  width: ${RFValue(306)}px;
  height: ${RFValue(60)}px;
`

export const Info = styled.Text<ResponsiveProps>`
  ${({ theme, windowHeight }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(theme.fonts.sizes.large)}px;
    line-height: ${RFValue(theme.spacings.large)}px;
    text-align: center;
    margin-top: ${RFValue(20)}px;
    margin-bottom: ${windowHeight < 812
      ? RFValue(32)
      : RFValue(56)}px;
  `}
`

export const WrapperHr = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${RFValue(16)}px;
`

export const Hr = styled.View`
  ${({ theme }) => css`
    width: 34%;
    height: 1px;
    background-color: ${theme.colors.neutral500};
  `}
`

export const TextHr = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.neutral};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(theme.fonts.sizes.medium)}px;
    line-height: ${RFValue(16)}px;
    padding-left: ${RFValue(15)}px;
    padding-right: ${RFValue(15)}px;
    opacity: 0.6;
  `}
`

export const WrapperSocial = styled.View<ResponsiveProps>`
  ${({ windowHeight }) => css`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${windowHeight < 812
      ? RFValue(50)
      : RFValue(140)}px;
  `}
`
