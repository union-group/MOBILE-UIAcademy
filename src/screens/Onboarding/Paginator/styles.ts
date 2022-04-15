import { Animated } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  height: ${RFValue(64)}px;
`

export const Dot = styled(Animated.View)`
  ${({ theme }) => css`
    width: ${RFValue(6)}px;
    height: ${RFValue(6)}px;
    border-radius: ${RFValue(5)}px;
    background-color: ${theme.colors.primary};
    margin-right: ${RFValue(7)}px;
  `}
`
