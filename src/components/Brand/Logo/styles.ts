import styled, { css } from 'styled-components/native'

import { LogoProps } from '.'

type ContainerProps = Pick<LogoProps, 'size' | 'color'>

const containerModifiers = {
  small: () => css`
    width: 116px;
    height: 16px;
  `,
  medium: () => css`
    width: 189px;
    height: 26px;
  `,
  large: () => css`
    width: 210px;
    height: 22px;
  `,
}

export const Container = styled.View<ContainerProps>`
  ${({ theme, size, color }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${theme.colors[color]};
    ${!!size && containerModifiers[size]};
  `}
`
