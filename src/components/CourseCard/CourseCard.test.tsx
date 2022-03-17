import React from 'react'

import { renderWithTheme } from '../../utils/test/helpers'

import { CourseCard } from '.'
import FigmaSvg from '../../assets/figma.svg'

jest.mock('../../assets/figma.svg', () => () => (
  <h1>Esse é o meu svg</h1>
))

describe('<CourseCard />', () => {
  it('should render by default', () => {
    const { getByTestId } = renderWithTheme(
      <CourseCard
        testID="courseCard"
        svg={FigmaSvg}
        title="Figma"
        amountClasses="7 aulas"
        amountHours="4h"
      />,
    )

    const courseCard = getByTestId('courseCard')
    const wrapperIcon = getByTestId('wrapperIcon')
    const titleCourse = getByTestId('titleCourse')
    const detailsCourse = getByTestId('detailsCourse')

    expect(courseCard).toBeTruthy()
    expect(wrapperIcon).toBeTruthy()
    expect(titleCourse).toBeTruthy()
    expect(detailsCourse).toBeTruthy()
  })
  it('should match snapshot', () => {
    const { toJSON } = renderWithTheme(
      <CourseCard
        testID="courseCard"
        svg={FigmaSvg}
        title="Figma"
        amountClasses="7 aulas"
        amountHours="4h"
      />,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
