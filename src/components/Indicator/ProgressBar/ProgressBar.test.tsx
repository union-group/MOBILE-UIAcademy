import React from 'react'

import { renderWithTheme } from '../../../utils/test/helpers'

import { ProgressBar } from '.'

describe('<ProgressBar />', () => {
  it('should render ProgressBar', () => {
    const { getByTestId } = renderWithTheme(
      <ProgressBar progress={50} />,
    )

    const currentProgress = getByTestId('current-progress')

    expect(currentProgress).toHaveStyle({
      width: '50%',
    })
  })
})
