import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

import * as S from './styles'

export interface CourseCardProps extends RectButtonProps {
  svg: React.FC<SvgProps>
  title: string
  amountClasses: string
  amountHours: string
}

export const CourseCard = ({
  svg: Svg,
  title,
  amountClasses,
  amountHours,
  ...rest
}: CourseCardProps) => {
  return (
    <S.Container {...rest}>
      <S.WrapperIcon testID="wrapperIcon">
        <Svg />
      </S.WrapperIcon>
      <S.TitleCourse testID="titleCourse">{title}</S.TitleCourse>
      <S.WrapperSubTitle>
        <S.DetailsCourse testID="detailsCourse">
          {amountClasses} - {amountHours}
        </S.DetailsCourse>
      </S.WrapperSubTitle>
    </S.Container>
  )
}
