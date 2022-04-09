import React from 'react'

import { renderWithTheme } from '../../../utils/test/helpers'

import { OnboardingItem } from '.'
import { slides } from '../slides'

describe('<OnboardingItem />', () => {
  it('should render by default', () => {
    const scrollTo = jest.fn()

    const { getAllByTestId, getByText } = renderWithTheme(
      <OnboardingItem
        item={slides[0]}
        lastSlide={slides[slides.length - 1].id}
        scrollTo={scrollTo}
      />,
    )
    const container = getAllByTestId('container')
    const textSkip = getByText('Pular')
    const title = getByText(
      'Comece hoje e torne-se um expert em UI Design',
    )
    const subTitle = getByText(
      'São mais de 20 cursos para você assistir quando quiser',
    )

    expect(container).toBeTruthy()
    expect(textSkip).toBeTruthy()
    expect(title).toBeTruthy()
    expect(subTitle).toBeTruthy()
  })
})
