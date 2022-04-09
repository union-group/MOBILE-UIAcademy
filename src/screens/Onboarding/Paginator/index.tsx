import React from 'react'
import { Animated, useWindowDimensions } from 'react-native'
import { SlideProps } from '../slides'

import * as S from './styles'

export interface PaginatorProps {
  item: SlideProps[]
  scrollX: Animated.Value
}

export const Paginator = ({ item, scrollX }: PaginatorProps) => {
  const { width } = useWindowDimensions()
  return (
    <S.Container testID="container">
      {item.map((_, i) => {
        const inputRange = [
          (i - 1) * width,
          i * width,
          (i + 1) * width,
        ]

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        })
        return (
          <S.Dot
            testID="dot"
            style={{ opacity }}
            key={i.toString()}
          />
        )
      })}
    </S.Container>
  )
}
