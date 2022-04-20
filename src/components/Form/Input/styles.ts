import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { TextInput } from 'react-native'

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`
export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(theme.fonts.sizes.small)}px;
    line-height: ${RFValue(18)}px;
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.small}px;
  `}
`

export const Wrapper = styled.View`
  flex: 1;
`

export const InputText = styled(TextInput)`
  ${({ theme }) => css`
    position: relative;
    background-color: transparent;
    color: ${theme.colors.black};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(theme.fonts.sizes.medium)}px;
    padding: 16px 22px;
    border: 1px solid ${theme.colors.neutral};
    border-radius: ${theme.borderRadius[1]}px;
  `}
`

export const IconContainer = styled.View`
  position: absolute;
  top: 28px;
  right: 5px;
  z-index: 1;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
`
