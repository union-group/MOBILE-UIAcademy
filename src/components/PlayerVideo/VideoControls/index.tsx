import React from 'react'
import { setStatusBarHidden } from 'expo-status-bar'
import { AVPlaybackStatus, AVPlaybackStatusToSet } from 'expo-av'

import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import * as ScreenOrientation from 'expo-screen-orientation'

import { useVideo } from '../../../hooks/useVideo'

import { VideoButtons } from '../VideoButtons'

import { convertMsToMinutesSeconds } from '../helpers/convertMsToMinutesSeconds'

import FullScreenIcon from '../../../assets/player/full-screen.svg'
import OptionsIcon from '../../../assets/player/options.svg'

import * as S from './styles'

export interface Video {
  current: {
    playAsync(): Promise<AVPlaybackStatus>
    pauseAsync(): Promise<AVPlaybackStatus>
    replayAsync(
      status?: AVPlaybackStatusToSet,
    ): Promise<AVPlaybackStatus>
    setPositionAsync(
      positionMillis: number,
      tolerances?: {
        toleranceMillisBefore?: number
        toleranceMillisAfter?: number
      },
    ): Promise<AVPlaybackStatus>
  }
}

export interface VideoControlsProps {
  video: Video
}

export function VideoControls({ video }: VideoControlsProps) {
  const { isFullScreen, changeFullScreenValue, videoStatus } =
    useVideo()

  const totalTime = convertMsToMinutesSeconds(
    videoStatus.durationMillis - videoStatus.positionMillis,
  )

  function seekTimeVideo(value: number) {
    video.current.setPositionAsync(value * videoStatus.durationMillis)

    if (videoStatus.isPlaying) {
      video.current.playAsync()
    }
  }

  async function handleFullScreen() {
    if (isFullScreen) {
      changeFullScreenValue()
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT,
      )
    } else {
      setStatusBarHidden(true, 'fade')
      changeFullScreenValue()
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT,
      )
    }
  }

  return (
    <>
      <VideoButtons video={video} />

      <S.Controls isFullScreen={isFullScreen} testID="video-controls">
        <S.SeekBar
          value={
            videoStatus.durationMillis && videoStatus.positionMillis
              ? videoStatus.positionMillis /
                videoStatus.durationMillis
              : 0
          }
          minimumValue={0}
          maximumValue={1}
          onSlidingComplete={seekTimeVideo}
        />

        <S.GeneralControls isFullScreen={isFullScreen}>
          <S.TotalTime>{totalTime}</S.TotalTime>

          <TouchableWithoutFeedback
            onPress={handleFullScreen}
            testID="full-screen-button"
          >
            <FullScreenIcon />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <OptionsIcon />
          </TouchableWithoutFeedback>
        </S.GeneralControls>
      </S.Controls>
    </>
  )
}
