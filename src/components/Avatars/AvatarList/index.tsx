import React from 'react'

import { Avatar } from '../Avatar'

import * as S from './styles'

type AvatarArrayProps = {
  id: string
  imgUrl: string
}

export interface AvatarListProps {
  imageList: AvatarArrayProps[]
}

export const AvatarList = ({ imageList }: AvatarListProps) => {
  return (
    <S.SliderAvatar>
      {imageList.slice(0, 3).map((image) => (
        <S.WrapperAvatar testID="wrapperAvatar" key={image.id}>
          <Avatar imgUrl={image.imgUrl} />
        </S.WrapperAvatar>
      ))}
      {!!imageList && imageList.length > 3 && (
        <S.FillCircle testID="fillCircle">
          <S.Text>+{imageList.length - 3}</S.Text>
        </S.FillCircle>
      )}
    </S.SliderAvatar>
  )
}
