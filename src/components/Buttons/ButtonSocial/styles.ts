import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const WrapperContainer = styled.View`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.neutral};
    border-radius: ${theme.borderRadius[1]}px;
  `}
`

export const Container = styled(RectButton)`
  ${() => css`
    width: ${RFValue(160)}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ${RFValue(16)}px 0;
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(theme.fonts.sizes.medium)}px;
    color: ${theme.colors.black};
    margin-left: ${RFValue(theme.spacings.small)}px;
  `}
`
