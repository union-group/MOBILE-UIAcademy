import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import { ButtonProps } from '.'

type ContainerProps = Pick<ButtonProps, 'color'>

export const Container = styled(RectButton)<ContainerProps>`
  ${({ theme, color }) => css`
    width: 50%;
    border-radius: 16px;
    padding: 24px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors[color]};
    margin: ${theme.spacings.medium};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.white};
  `}
`
