import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-test-renderer'

import { useVideo, VideoProvider, VideoProviderProps } from '.'

describe('useVideo', () => {
  it('should change the value of isFullScreen', () => {
    const wrapper = ({ children }: VideoProviderProps) => (
      <VideoProvider>{children}</VideoProvider>
    )

    const { result } = renderHook(() => useVideo(), {
      wrapper,
    })

    act(() => {
      result.current.changeFullScreenValue()
    })

    expect(result.current.isFullScreen).toBe(true)
  })

  it('should exec onPrevious function', () => {
    const wrapper = ({ children }: VideoProviderProps) => (
      <VideoProvider>{children}</VideoProvider>
    )

    const { result } = renderHook(() => useVideo(), {
      wrapper,
    })

    act(() => {
      result.current.onPrevious()
    })

    // expect()
  })

  it('should exec onNext function', () => {
    const wrapper = ({ children }: VideoProviderProps) => (
      <VideoProvider>{children}</VideoProvider>
    )

    const { result } = renderHook(() => useVideo(), {
      wrapper,
    })

    act(() => {
      result.current.onNext()
    })

    // expect()
  })
})
