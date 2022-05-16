import { TextProps } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import {
  RFPercentage,
  RFValue,
} from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

type TextFooterProps = TextProps & {
  textBold?: boolean
}

type ResponsiveProps = {
  windowHeight: number
}

export const ScrollViewContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  margin-top: ${RFPercentage(8)}px;
  margin-bottom: ${RFPercentage(2)}px;
`

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${RFValue(16)}px;
`

export const Info = styled.Text<ResponsiveProps>`
  ${({ theme, windowHeight }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(theme.fonts.sizes.large)}px;
    line-height: ${RFValue(theme.spacings.large)}px;
    text-align: center;
    margin-top: ${RFValue(32)}px;
    margin-bottom: ${windowHeight < 812
      ? RFValue(32)
      : RFValue(56)}px;
  `}
`

export const WrapperForgotPassword = styled.View`
  width: 100%;
  border: 1px solid transparent;
  align-items: flex-end;
  margin-top: -8px;
`

export const LinkUrl = styled(BorderlessButton)`
  padding: 2px;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(theme.fonts.sizes.xsmall)}px;
    line-height: ${RFValue(16)}px;
  `}
`

export const WrapperButton = styled.View<ResponsiveProps>`
  ${({ windowHeight }) => css`
    width: 100%;
    margin-top: ${windowHeight < 812 ? RFValue(16) : RFValue(32)}px;
    margin-bottom: ${windowHeight < 812
      ? RFValue(16)
      : RFValue(32)}px;
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
    background-color: ${theme.colors.neutral};
  `}
`

export const TextHr = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(theme.fonts.sizes.xsmall)}px;
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

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const WrapperCreateAccount = styled.View`
  border: 1px solid transparent;
`

export const TextFooter = styled.Text<TextFooterProps>`
  ${({ theme, textBold = false }) => css`
    font-family: ${textBold
      ? theme.fonts.medium
      : theme.fonts.regular};
    font-size: ${RFValue(theme.fonts.sizes.small)}px;
    line-height: ${RFValue(18)}px;
    text-align: center;
  `}
`
