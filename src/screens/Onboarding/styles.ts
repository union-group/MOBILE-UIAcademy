import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.black};
  `}
`

export const Content = styled.View`
  flex: 3;
`

export const WrapperDot = styled.View`
  position: absolute;
  left: ${RFValue(35)}px;
  bottom: ${RFValue(60)}px;
`
