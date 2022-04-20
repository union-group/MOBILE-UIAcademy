import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const SliderAvatar = styled.View`
  flex-direction: row;
`

export const WrapperAvatar = styled.View`
  ${({ theme }) => css`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius[4]}px;
    background-color: ${theme.colors.white};
    margin-left: -20px;
  `}
`

export const FillCircle = styled.View`
  ${({ theme }) => css`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius[4]}px;
    background-color: ${theme.colors.black};
    margin-left: -20px;
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(theme.fonts.sizes.xsmall)}px;
    color: ${theme.colors.white};
  `}
`
