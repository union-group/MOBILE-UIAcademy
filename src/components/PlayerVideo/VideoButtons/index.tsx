import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Video } from '../VideoControls'

import { useVideo } from '../../../hooks/useVideo'

import PlayIcon from '../../../assets/player/play.svg'
import StopIcon from '../../../assets/player/stop.svg'
import PreviousVideoIcon from '../../../assets/player/previous-video.svg'
import NextVideoIcon from '../../../assets/player/next-video.svg'

import * as S from './styles'

interface VideoButtonProps {
  video: Video
}

export function VideoButtons({ video }: VideoButtonProps) {
  const { videoStatus, onPrevious, onNext } = useVideo()

  const remainingTime =
    videoStatus.positionMillis - videoStatus.durationMillis

  function handleTogglePlay() {
    if (videoStatus.isPlaying) {
      video.current.pauseAsync()
    } else {
      video.current.playAsync()
    }

    if (remainingTime === 0) {
      video.current.replayAsync()
    }
  }

  return (
    <>
      <S.PreviousVideoIconContainer>
        <TouchableOpacity
          testID="button-previous-video"
          onPress={onPrevious}
        >
          <PreviousVideoIcon />
        </TouchableOpacity>
      </S.PreviousVideoIconContainer>

      <S.TogglePlayContainer testID="toggle-container">
        <S.TogglePlay
          onPress={handleTogglePlay}
          testID="toggle-button"
        >
          {videoStatus.isPlaying ? (
            <StopIcon testID="stop-icon" />
          ) : (
            <PlayIcon testID="play-icon" />
          )}
        </S.TogglePlay>
      </S.TogglePlayContainer>

      <S.NextVideoIconContainer>
        <TouchableOpacity testID="button-next-video" onPress={onNext}>
          <NextVideoIcon />
        </TouchableOpacity>
      </S.NextVideoIconContainer>
    </>
  )
}
