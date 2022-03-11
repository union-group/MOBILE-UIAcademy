import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import { SvgProps } from 'react-native-svg'

import * as S from './styles'

export interface ButtonSocialProps extends RectButtonProps {
  svg: React.FC<SvgProps>
  title: string
}

export const ButtonSocial = ({
  svg: Svg,
  title,
  ...rest
}: ButtonSocialProps) => {
  return (
    <S.WrapperContainer>
      <S.Container {...rest}>
        <Svg width={RFValue(20)} height={RFValue(20)} />
        <S.Text testID="title-button">{title}</S.Text>
      </S.Container>
    </S.WrapperContainer>
  )
}
