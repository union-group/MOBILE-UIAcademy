import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { render, RenderOptions } from '@testing-library/react-native'

import { theme } from '../../styles/theme'

import {
  VideoContext,
  VideoContextData,
  VideoContextDefaultValues,
} from '../../hooks/useVideo'

type CustomRenderOptions = Omit<RenderOptions, 'queries'>

interface CustomRenderProps extends CustomRenderOptions {
  videoProviderProps?: VideoContextData
}

export const renderWithTheme = (component: ReactElement) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)

export const renderWithHook = (
  ui: ReactElement,
  {
    videoProviderProps = VideoContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {},
) =>
  render(
    <ThemeProvider theme={theme}>
      <VideoContext.Provider value={videoProviderProps}>
        {ui}
      </VideoContext.Provider>
    </ThemeProvider>,
    renderOptions,
  )
