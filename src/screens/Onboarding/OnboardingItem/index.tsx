import React from 'react'
import { useWindowDimensions } from 'react-native'

import { ButtonIcon } from '../../../components/Buttons/ButtonIcon'
import { Button } from '../../../components/Buttons/Button'
import { Logo } from '../../../components/Brand/Logo'

import { SlideProps } from '../slides'

import RightSideSvg from '../../../assets/right_side_icon.svg'

import { theme } from '../../../styles/theme'

import * as S from './styles'

export interface OnboardingItemProps {
  item: SlideProps
  lastSlide: string
  scrollTo: () => void
}

export const OnboardingItem = ({
  item,
  lastSlide,
  scrollTo,
}: OnboardingItemProps) => {
  const { width } = useWindowDimensions()

  return (
    <S.Container testID="container" widthScreen={width}>
      <S.ImageUrl source={item.imageUrl} widthScreen={width}>
        {lastSlide !== item.id && (
          <S.Skip testID="skip" onPress={scrollTo}>
            <S.TextSkip>Pular</S.TextSkip>
          </S.Skip>
        )}
      </S.ImageUrl>
      <S.WrapperDescribe>
        <S.WrapperLogo>
          <Logo size="small" />
        </S.WrapperLogo>
        <S.BoxShadow
          colors={['transparent', theme.colors.black]}
          end={[0.1, 0.9]}
          start={[0.1, 0.1]}
        />
        <S.Title>{item.title}</S.Title>
        <S.SubTitle>{item.subTitle}</S.SubTitle>

        <S.WrapperIcon>
          {lastSlide !== item.id ? (
            <ButtonIcon
              svg={RightSideSvg}
              onPress={scrollTo}
              fillColor="green"
              withBorder={false}
              size="large"
              sizeIcon="small"
            />
          ) : (
            <Button onPress={scrollTo} size="fullWidth">
              Começar
            </Button>
          )}
        </S.WrapperIcon>
      </S.WrapperDescribe>
    </S.Container>
  )
}
