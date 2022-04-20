import React from 'react'

import { renderWithTheme } from '../../../../utils/test/helpers'

import { CommunityContent } from '.'

describe('<CommunityContent />', () => {
  it('should render CommunityContent', () => {
    const { getByText } = renderWithTheme(<CommunityContent />)

    const content = getByText('Community Content')

    expect(content).toBeTruthy()
  })
})
