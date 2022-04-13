/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

import {
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react-native'
import { Dimensions } from 'react-native'
import { act } from 'react-test-renderer'

import { renderWithHook } from '../../utils/test/helpers'

import {
  VideoContextData,
  VideoContextDefaultValues,
} from '../../hooks/useVideo'

import { PlayerVideo } from '.'

const { height: heightDevice } = Dimensions.get('window')

const videoUrl =
  'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'

const defaultStyles = {
  flexBasis: 0,
  flexGrow: 1,
  flexShrink: 1,
  position: 'relative',
  zIndex: 3,
}

const onBackMock = jest.fn()
const onPreviousMock = jest.fn()
const onNextMock = jest.fn()

describe('<PlayerVideo />', () => {
  it('should render PlayerVideo', () => {
    const videoProviderProps: VideoContextData = {
      ...VideoContextDefaultValues,
    }

    const { getByTestId, getByA11yLabel } = renderWithHook(
      <PlayerVideo url={videoUrl} onBack={onBackMock} />,
      {
        videoProviderProps,
      },
    )

    const video = getByA11yLabel('video-component')
    const buttonBack = getByTestId('button-back')
    const toggleContainer = getByTestId('toggle-container')
    const buttonPreviousVideo = getByTestId('button-previous-video')
    const buttonNextVideo = getByTestId('button-next-video')
    const videoControls = getByTestId('video-controls')

    expect(video).toBeTruthy()
    expect(buttonBack).toBeTruthy()
    expect(toggleContainer).toBeTruthy()
    expect(buttonPreviousVideo).toBeTruthy()
    expect(buttonNextVideo).toBeTruthy()
    expect(videoControls).toBeTruthy()
  })

  it('should go to the previous video on click the button', () => {
    const videoProviderProps = {
      ...VideoContextDefaultValues,
      onPrevious: onPreviousMock,
      onNext: onNextMock,
    }

    const { getByTestId } = renderWithHook(
      <PlayerVideo url={videoUrl} onBack={onBackMock} />,
      {
        videoProviderProps,
      },
    )

    const buttonPreviousVideo = getByTestId('button-previous-video')

    fireEvent.press(buttonPreviousVideo)

    expect(onPreviousMock).toHaveBeenCalled()
  })

  it('should go to the next video on click the button', () => {
    const videoProviderProps = {
      ...VideoContextDefaultValues,
      onPrevious: onPreviousMock,
      onNext: onNextMock,
    }

    const { getByTestId } = renderWithHook(
      <PlayerVideo url={videoUrl} onBack={onBackMock} />,
      {
        videoProviderProps,
      },
    )

    const buttonNextVideo = getByTestId('button-next-video')

    fireEvent.press(buttonNextVideo)

    expect(onNextMock).toHaveBeenCalled()
  })

  it('should hidden/show controls', async () => {
    const videoProviderProps = {
      ...VideoContextDefaultValues,
    }

    const { getByTestId, queryByTestId } = renderWithHook(
      <PlayerVideo url={videoUrl} onBack={onBackMock} />,
      {
        videoProviderProps,
      },
    )

    const video = getByTestId('video-button')
    const videoControls = queryByTestId('video-controls')
    const togglePlayButton = getByTestId('toggle-button')

    fireEvent.press(togglePlayButton)

    act(() => {
      fireEvent.press(video)
    })

    waitForElementToBeRemoved(() => videoControls)
  })

  it('should change video for full screen', async () => {
    const videoProviderProps = {
      ...VideoContextDefaultValues,
      isFullScreen: true,
    }

    const { getByTestId } = renderWithHook(
      <PlayerVideo url={videoUrl} onBack={onBackMock} />,
      {
        videoProviderProps,
      },
    )

    const container = getByTestId('container')

    expect(container.props.style).toEqual([
      {
        ...defaultStyles,
        maxHeight: heightDevice,
      },
    ])
  })
})
