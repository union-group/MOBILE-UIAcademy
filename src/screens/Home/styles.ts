import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.background};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    text-align: center;
    font-size: ${RFValue(theme.fonts.sizes.large)}px;
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.large}px;
  `}
`
