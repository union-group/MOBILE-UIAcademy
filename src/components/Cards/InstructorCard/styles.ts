import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: ${theme.colors.white};
    width: ${RFValue(208)}px;
    height: ${RFValue(72)}px;
    border-radius: ${theme.borderRadius[3]}px;
    padding: ${theme.spacings.small}px;
    margin-right: ${theme.spacings.small}px;
  `}
`

export const Avatar = styled.Image`
  ${({ theme }) => css`
    width: 50px;
    height: 56px;
    background-color: ${theme.colors.background};
    border-radius: ${theme.borderRadius[2]}px;
  `}
`

export const Wrapper = styled.View`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small}px;
  `}
`

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(theme.fonts.sizes.medium)}px;
    line-height: ${RFValue(20)}px;
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.black};
  `}
`

export const Work = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(theme.fonts.sizes.small)}px;
    line-height: ${RFValue(16)}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.black};
    opacity: 0.7;
    margin-top: ${theme.spacings.xsmall}px;
  `}
`
