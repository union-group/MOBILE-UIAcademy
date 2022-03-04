import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.spacings.large}px 46px 0
      ${theme.spacings.medium}px;
    background-color: ${theme.colors.background};
    color: #000;
  `}
`

export const Text = styled.Text``
