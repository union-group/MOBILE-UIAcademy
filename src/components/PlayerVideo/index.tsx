import React, { useEffect, useRef, useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { useVideo } from '../../hooks/useVideo'

import { ButtonIcon } from '../ButtonIcon'
import { VideoControls } from './VideoControls'

import ArrowIcon from '../../assets/arrow-left.svg'

import * as S from './styles'

export interface PlayerVideoProps {
  url: string
  onBack: () => void
}

export const PlayerVideo = ({ url, onBack }: PlayerVideoProps) => {
  const [isShowControls, setIsShowControls] = useState(true)

  const video = useRef(null)

  const { isFullScreen, videoStatus, setVideoStatus } = useVideo()

  const remainingTime =
    videoStatus.positionMillis - videoStatus.durationMillis

  function handleToggleControls() {
    setIsShowControls((prevState) => !prevState)
  }

  useEffect(() => {
    let fadeOut = null

    if (videoStatus.isPlaying) {
      fadeOut = setTimeout(() => {
        setIsShowControls(false)
      }, 2000)
    }

    return () => clearTimeout(fadeOut)
  }, [videoStatus.isPlaying])

  useEffect(() => {
    if (remainingTime === 0) {
      setIsShowControls(true)
    }
  }, [remainingTime])

  return (
    <S.Container testID="container" isFullScreen={isFullScreen}>
      <S.ButtonBack>
        <ButtonIcon
          testID="button-back"
          onlyIcon
          svg={ArrowIcon}
          onPress={onBack}
        />
      </S.ButtonBack>

      <TouchableWithoutFeedback
        onPress={handleToggleControls}
        testID="video-button"
      >
        <S.VideoPlayer
          isFullScreen={isFullScreen}
          ref={video}
          source={{
            uri: url,
          }}
          accessibilityLabel="video-component"
          useNativeControls={false}
          resizeMode="cover"
          onPlaybackStatusUpdate={(status) =>
            setVideoStatus(() => status)
          }
        />
      </TouchableWithoutFeedback>

      {isShowControls && <VideoControls video={video} />}
    </S.Container>
  )
}
