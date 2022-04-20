import React from 'react'

import { fireEvent } from '@testing-library/react-native'

import { renderWithHook } from '../../../utils/test/helpers'

import { Video } from '../VideoControls'

import {
  VideoContextData,
  VideoContextDefaultValues,
} from '../../../hooks/useVideo'

import { VideoButtons } from '.'

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

describe('<VideoButtons />', () => {
  it('should render VideoButtons', () => {
    const videoProviderProps: VideoContextData = {
      ...VideoContextDefaultValues,
    }

    const { getByTestId } = renderWithHook(
      <VideoButtons video={video} />,
      {
        videoProviderProps,
      },
    )

    const buttonPreviousVideo = getByTestId('button-previous-video')
    const togglePlayButton = getByTestId('toggle-button')
    const buttonNextVideo = getByTestId('button-next-video')

    expect(buttonPreviousVideo).toBeTruthy()
    expect(togglePlayButton).toBeTruthy()
    expect(buttonNextVideo).toBeTruthy()
  })

  it('should render play', async () => {
    const videoProviderProps: VideoContextData = {
      ...VideoContextDefaultValues,
    }

    const { getByTestId } = renderWithHook(
      <VideoButtons video={video} />,
      {
        videoProviderProps,
      },
    )

    const togglePlayButton = getByTestId('toggle-button')
    const playIcon = getByTestId('play-icon')

    expect(playIcon).toBeTruthy()

    fireEvent.press(togglePlayButton)
  })

  it('should render stop', async () => {
    const videoProviderProps: VideoContextData = {
      ...VideoContextDefaultValues,
      videoStatus: {
        isPlaying: true,
      },
    }

    const { getByTestId } = renderWithHook(
      <VideoButtons video={video} />,
      {
        videoProviderProps,
      },
    )

    const togglePlayButton = getByTestId('toggle-button')
    const stopIcon = getByTestId('stop-icon')

    expect(stopIcon).toBeTruthy()

    fireEvent.press(togglePlayButton)
  })

  it('should replay the video when clicking play if finished', async () => {
    const videoProviderProps: VideoContextData = {
      ...VideoContextDefaultValues,
      videoStatus: {
        durationMillis: 10,
        positionMillis: 10,
      },
    }

    const { getByTestId } = renderWithHook(
      <VideoButtons video={video} />,
      {
        videoProviderProps,
      },
    )

    const togglePlayButton = getByTestId('toggle-button')
    const playIcon = getByTestId('play-icon')

    fireEvent.press(togglePlayButton)

    expect(playIcon).toBeTruthy()
  })
})
