import React from 'react'

import { renderWithTheme } from '../../../utils/test/helpers'

import { WatchingCard } from '.'

describe('<WatchingCard />', () => {
  it('should render by default', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <WatchingCard
        testID="watchingCard"
        courseName="Curso"
        currentClassName="Tema do curso"
        urlThumbnail="https://cnd.com/image-name.jpg"
        timeTotalVideo={45}
        timeWatchedVideo={28}
      />,
    )

    const courseName = getByText('Curso')
    const currentClassName = getByText('Tema do curso')
    const thumbnailCourse = getByTestId('thumbnail-course')
    const timeLeft = getByText('Restam 17min')
    const totalTimeVideo = getByText('45min')

    expect(courseName).toBeTruthy()
    expect(currentClassName).toBeTruthy()
    expect(thumbnailCourse.props.source.uri).toEqual(
      'https://cnd.com/image-name.jpg',
    )
    expect(timeLeft).toBeTruthy()
    expect(totalTimeVideo).toBeTruthy()
  })
})
