import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const WrapperContainer = styled.View`
  border: 1px solid #e1e1e1;
  border-radius: 10px;
`

export const Container = styled(RectButton)`
  ${() => css`
    width: ${RFValue(160)}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: ${RFValue(16)}px ${RFValue(32)}px;
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.black};
    margin-left: ${RFValue(8)}px;
  `}
`
