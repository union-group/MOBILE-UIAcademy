import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.background};
  `}
`

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    text-align: center;
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.large};
  `}
`
