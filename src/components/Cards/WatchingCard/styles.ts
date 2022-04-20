import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled(RectButton)`
  ${({ theme }) => css`
    width: ${RFValue(343)}px;
    height: ${RFValue(117)}px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 ${RFValue(theme.spacings.small)}px;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius[3]}px;
  `}
`

export const ContentRight = styled.View`
  ${({ theme }) => css`
    width: ${RFValue(226)}px;
    margin-left: ${theme.spacings.small}px;
  `}
`

export const ThumbnailImage = styled.ImageBackground.attrs(
  (props) => ({
    imageStyle: {
      borderRadius: Number(props.theme.borderRadius[2]),
    },
  }),
)`
  width: ${RFValue(85)}px;
  height: ${RFValue(85)}px;
  justify-content: center;
  align-items: center;
`

export const CourseName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${theme.fonts.sizes.xsmall}px;
    color: ${theme.colors.black};
    line-height: ${RFValue(20)}px;
  `}
`

export const CurrentClassName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${theme.fonts.sizes.small}px;
    color: ${theme.colors.black};
    line-height: ${RFValue(20)}px;
    margin-bottom: ${theme.spacings.small}px;
  `}
`

export const WrapperTimeContent = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${theme.spacings.small}px;
  `}
`

export const TimeLeft = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fonts.sizes.small}px;
    color: ${theme.colors.black};
  `}
`

export const TimeTotal = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fonts.sizes.medium}px;
    color: ${theme.colors.black};
    opacity: 0.6;
  `}
`
