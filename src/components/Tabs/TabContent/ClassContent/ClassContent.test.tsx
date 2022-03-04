import React from 'react'

import { renderWithTheme } from '../../../../utils/test/helpers'

import { ClassContent } from '.'

describe('<ClassContent />', () => {
  it('should render ClassContent', () => {
    const { getByText } = renderWithTheme(<ClassContent />)

    const content = getByText('Class Content')

    expect(content).toBeTruthy()
  })
})
