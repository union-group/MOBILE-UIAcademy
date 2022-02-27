import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { ExampleProps } from '.'

type ContainerProps = Pick<ExampleProps, 'color'>

export const Container = styled(TouchableOpacity)<ContainerProps>`
  ${({ theme, color }) => css`
    width: 50%;
    border-radius: 16px;
    padding: 24px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors[color]};
    margin: ${theme.spacings.medium}px;
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(theme.fonts.sizes.medium)}px;
    color: ${theme.colors.white};
  `}
`
