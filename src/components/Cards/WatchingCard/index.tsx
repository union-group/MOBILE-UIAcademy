import React from 'react'

import { RectButtonProps } from 'react-native-gesture-handler'

import { formatTime } from '../../../utils/formatTime'

import { ProgressBar } from '../../Indicator/ProgressBar'

import PlaySvg from '../../assets/play.svg'

import * as S from './styles'

export interface WatchingCardProps extends RectButtonProps {
  courseName: string
  currentClassName: string
  urlThumbnail: string
  timeTotalVideo: number
  timeWatchedVideo: number
}

export const WatchingCard = ({
  courseName,
  currentClassName,
  urlThumbnail,
  timeTotalVideo,
  timeWatchedVideo,
  ...rest
}: WatchingCardProps) => {
  const totalVideo = Math.floor(timeTotalVideo)
  const timeLeft = Math.floor(totalVideo - timeWatchedVideo)
  const progress = Math.floor((timeWatchedVideo * 100) / totalVideo)

  return (
    <S.Container {...rest}>
      <S.ThumbnailImage
        testID="thumbnail-course"
        source={{ uri: urlThumbnail }}
      >
        <PlaySvg />
      </S.ThumbnailImage>

      <S.ContentRight>
        <S.CourseName>{courseName}</S.CourseName>
        <S.CurrentClassName>{currentClassName}</S.CurrentClassName>

        <ProgressBar progress={progress} />

        <S.WrapperTimeContent>
          <S.TimeLeft>
            Restam {formatTime(timeLeft).replace('.', ':')}
          </S.TimeLeft>
          <S.TimeTotal>
            {formatTime(totalVideo).replace('.', ':')}
          </S.TimeTotal>
        </S.WrapperTimeContent>
      </S.ContentRight>
    </S.Container>
  )
}
