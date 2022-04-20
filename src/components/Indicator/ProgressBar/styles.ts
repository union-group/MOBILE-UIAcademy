import styled, { css } from 'styled-components/native'

interface CurrentProgressProps {
  progress: number
}

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 5px;
    background-color: ${theme.colors.primary};
    opacity: 0.4;
    border-radius: ${theme.borderRadius[0]}px;
  `}
`

export const CurrentProgress = styled.View<CurrentProgressProps>`
  ${({ theme, progress }) => css`
    width: ${progress}%;
    height: 5px;
    z-index: 2;
    background-color: ${theme.colors.primaryDark};
    border-radius: ${theme.borderRadius[0]}px;
  `}
`
