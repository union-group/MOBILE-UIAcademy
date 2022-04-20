import React from 'react'

import * as S from './styles'

export interface InstructorCardProps {
  avatar: string
  name: string
  work: string
}

export const InstructorCard = ({
  avatar,
  name,
  work,
}: InstructorCardProps) => {
  return (
    <S.Container>
      <S.Avatar
        testID="avatar"
        source={{ uri: avatar }}
        resizeMode="cover"
      />
      <S.Wrapper>
        <S.Name>{name}</S.Name>
        <S.Work>{work}</S.Work>
      </S.Wrapper>
    </S.Container>
  )
}
