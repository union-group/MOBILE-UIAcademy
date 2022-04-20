import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {
  widthScreen: number
}

export const Container = styled.View<Props>`
  ${({ theme, widthScreen }) => css`
    width: ${widthScreen}px;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 ${RFValue(theme.spacings.xlarge)}px;
  `}
`

export const Skip = styled(BorderlessButton)`
  align-items: flex-end;
  margin-top: ${RFValue(16)}px;
  margin-right: ${RFValue(30)}px;
`

export const TextSkip = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(theme.fonts.sizes.medium)}px;
    color: ${theme.colors.white};
  `}
`

export const ImageUrl = styled.ImageBackground.attrs({
  resizeMode: 'contain',
})<Props>`
  ${({ widthScreen }) => css`
    width: ${widthScreen}px;
    flex: 0.6;
    margin-top: ${RFValue(30)}px;
  `}
`

export const WrapperLogo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: -${RFValue(70)}px;
`

export const BoxShadow = styled(LinearGradient)`
  height: ${RFValue(55)}px;
`

export const WrapperDescribe = styled.View`
  flex: 0.5;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(theme.fonts.sizes.huge)}px;
    color: ${theme.colors.secondary};
    line-height: ${RFValue(theme.spacings.xlarge)}px;
  `}
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fonts.sizes.medium}px;
    color: ${theme.colors.secondary};
    opacity: 0.8;
    line-height: ${RFValue(22)}px;
    margin-top: ${RFValue(24)}px;
  `}
`

export const WrapperIcon = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: ${RFValue(60)}px;
`
