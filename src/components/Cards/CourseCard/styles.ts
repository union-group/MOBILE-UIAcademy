import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  ${({ theme }) => css`
    min-width: ${RFValue(138)}px;
    height: ${RFValue(134)}px;
    justify-content: center;
    padding: ${RFValue(theme.spacings.large)}px;
    background-color: ${theme.colors.black};
    border-radius: ${theme.borderRadius[3]}px;
  `}
`

export const WrapperIcon = styled.View`
  ${({ theme }) => css`
    width: ${RFValue(38)}px;
    height: ${RFValue(38)}px;
    align-items: center;
    justify-content: center;
    background-color: #343434;
    border-radius: ${theme.borderRadius[2]}px;
  `}
`

export const TitleCourse = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fonts.sizes.medium}px;
    color: ${theme.colors.secondary};
    margin-top: ${theme.spacings.small}px;
  `}
`
export const WrapperSubTitle = styled.View`
  ${() => css`
    flex-direction: row;
  `}
`
export const DetailsCourse = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fonts.sizes.small}px;
    color: ${theme.colors.secondary};
    margin-top: ${theme.spacings.xsmall}px;
    opacity: 0.7;
  `}
`
