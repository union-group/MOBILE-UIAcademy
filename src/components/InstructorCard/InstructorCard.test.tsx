import React from 'react'

import { renderWithTheme } from '../../utils/test/helpers'

import { InstructorCard, InstructorCardProps } from '.'

const instructorMock: InstructorCardProps = {
  avatar: 'photo.png',
  name: 'John Doe',
  work: 'UI',
}

describe('<InstructorCard />', () => {
  it('should render InstructorCard', () => {
    const { getByText, getByTestId } = renderWithTheme(
      <InstructorCard {...instructorMock} />,
    )

    const avatar = getByTestId('avatar')
    const name = getByText('John Doe')
    const work = getByText('UI')

    expect(avatar.props.source.uri).toEqual(instructorMock.avatar)
    expect(name.props.children).toEqual(instructorMock.name)
    expect(work.props.children).toEqual(instructorMock.work)
  })

  it('should match snapshot', () => {
    const { toJSON } = renderWithTheme(
      <InstructorCard {...instructorMock} />,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
