import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const RoundImage = styled.Image`
  ${({ theme }) => css`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: ${theme.borderRadius[4]}px;
  `}
`

export const FillStatus = styled.View`
  ${({ theme }) => css`
    position: absolute;
    top: -6px;
    left: -10px;
    z-index: 2;
    width: ${RFValue(22)}px;
    height: ${RFValue(22)}px;
    background-color: ${theme.colors.primary};
    border: 4px solid ${theme.colors.secondary};
    border-radius: ${theme.borderRadius[4]}px;
  `}
`

export const ImageWithStatus = styled.Image`
  ${({ theme }) => css`
    position: relative;
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: ${theme.borderRadius[2]}px;
  `}
`
