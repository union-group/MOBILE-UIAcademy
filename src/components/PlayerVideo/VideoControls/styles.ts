import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import Slider from '@react-native-community/slider'

interface VideoProps {
  isFullScreen: boolean
}

export const Controls = styled.View<VideoProps>`
  ${({ theme, isFullScreen }) => css`
    position: absolute;
    top: ${isFullScreen ? '100%' : '75%'};
    align-self: center;
    flex-direction: row;
    width: 95%;
    background-color: rgba(11, 11, 11, 0.6);
    border-radius: ${theme.borderRadius[2]}px;
    height: 40px;
  `}
`

export const SeekBar = styled(Slider).attrs(({ theme }) => ({
  minimumTrackTintColor: theme.colors.primary,
  maximumTrackTintColor: '#494949',
  thumbTintColor: theme.colors.primaryDark,
}))`
  flex: 1;
`

export const GeneralControls = styled.View<VideoProps>`
  ${({ theme, isFullScreen }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: ${isFullScreen ? 'center' : 'flex-end'};
    margin: 0 ${theme.spacings.xsmall}px;
    width: ${isFullScreen ? '13%' : '20%'};
  `}
`

export const TotalTime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(20)}px;
    color: ${theme.colors.secondary};
    opacity: 0.6;
    margin-right: ${theme.spacings.small}px;
  `}
`
