import React from 'react'

import * as S from './styles'

export interface ProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <S.Container>
      <S.CurrentProgress
        testID="current-progress"
        progress={progress}
      />
    </S.Container>
  )
}
