import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { render } from '@testing-library/react-native'

import { theme } from '../../styles/theme'

export const renderWithTheme = (component: ReactElement) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
