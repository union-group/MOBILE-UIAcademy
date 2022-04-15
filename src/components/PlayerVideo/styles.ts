import styled, { css } from 'styled-components/native'
import { Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Video } from 'expo-av'

const { height: heightDevice } = Dimensions.get('window')

interface VideoProps {
  isFullScreen: boolean
}

export const Container = styled.View<VideoProps>`
  ${({ isFullScreen }) => css`
    position: relative;
    flex: 1;
    max-height: ${isFullScreen ? `${heightDevice}px` : '211px'};
    z-index: 3;
  `}
`

export const ButtonBack = styled.View`
  position: absolute;
  top: ${getStatusBarHeight() + 12}px;
  left: 0px;
  z-index: 2;
`

export const VideoPlayer = styled(Video)<VideoProps>`
  ${({ isFullScreen }) => css`
    width: 100%;
    height: ${isFullScreen ? `${heightDevice}px` : '211px'};
  `}
`
