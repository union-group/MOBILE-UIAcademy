import React from 'react'
import { View } from 'react-native'

import * as S from './styles'

export interface AvatarProps {
  imgUrl: string
  withStatus?: boolean
}

export const Avatar = ({
  imgUrl,
  withStatus = false,
}: AvatarProps) => {
  const renderRounded = () => (
    <S.RoundImage
      testID="roundImage"
      source={{
        uri: imgUrl,
      }}
    />
  )

  const renderSquare = () => (
    <>
      <S.FillStatus testID="fillStatus" />
      <S.ImageWithStatus
        testID="imageWithStatus"
        source={{
          uri: imgUrl,
        }}
      />
    </>
  )
  return <View>{withStatus ? renderSquare() : renderRounded()}</View>
}
