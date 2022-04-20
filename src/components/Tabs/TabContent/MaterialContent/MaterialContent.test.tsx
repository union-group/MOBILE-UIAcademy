import React from 'react'

import { renderWithTheme } from '../../../../utils/test/helpers'

import { MaterialContent } from '.'

describe('<MaterialContent />', () => {
  it('should render MaterialContent', () => {
    const { getByText } = renderWithTheme(<MaterialContent />)

    const content = getByText('Material Content')

    expect(content).toBeTruthy()
  })
})
