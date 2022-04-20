import React from 'react'

import { fireEvent } from '@testing-library/react-native'

import { renderWithHook } from '../../../utils/test/helpers'

import {
  VideoContextData,
  VideoContextDefaultValues,
} from '../../../hooks/useVideo'

import { VideoControls, Video } from '.'

let video: Video

jest.mock('react', () => {
  const originReact = jest.requireActual('react')
  const mockUseRef = jest.fn()
  return {
    ...originReact,
    useRef: mockUseRef,
  }
})

beforeEach(() => {
  video = {
    current: {
      pauseAsync: jest.fn(),
      playAsync: jest.fn(),
      replayAsync: jest.fn(),
      setPositionAsync: jest.fn(),
    },
  }
})

describe('<VideoControls />', () => {
  it('should change video for full screen', async () => {
    const changeFullScreenValueMock = jest.fn()

    const videoProviderProps: VideoContextData = {
      ...VideoContextDefaultValues,
      changeFullScreenValue: changeFullScreenValueMock,
    }

    const { getByTestId } = renderWithHook(
      <VideoControls video={video} />,
      {
        videoProviderProps,
      },
    )

    const buttonFullScreen = getByTestId('full-screen-button')

    fireEvent.press(buttonFullScreen)

    expect(changeFullScreenValueMock).toBeCalled()
  })

  it('should change to default width', async () => {
    const changeFullScreenValueMock = jest.fn()

    const videoProviderProps: VideoContextData = {
      ...VideoContextDefaultValues,
      changeFullScreenValue: changeFullScreenValueMock,
      isFullScreen: true,
    }

    const { getByTestId } = renderWithHook(
      <VideoControls video={video} />,
      {
        videoProviderProps,
      },
    )

    const buttonFullScreen = getByTestId('full-screen-button')

    fireEvent.press(buttonFullScreen)

    expect(changeFullScreenValueMock).toBeCalled()
  })
})
