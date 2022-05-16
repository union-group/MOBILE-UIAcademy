import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-test-renderer'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'

import { waitFor } from '@testing-library/react-native'
import { useAuth, AuthProvider, AuthProviderProps } from '.'

jest.mock(
  '@react-native-async-storage/async-storage',
  () => mockAsyncStorage,
)

describe('useAuth', () => {
  it('should be able signIn', async () => {
    const wrapper = ({ children }: AuthProviderProps) => (
      <AuthProvider>{children}</AuthProvider>
    )

    const { result } = renderHook(() => useAuth(), {
      wrapper,
    })

    waitFor(() =>
      act(async () => {
        result.current.signIn('admin@gmail.com', 'admin')
      }),
    )

    expect(result.current.user).toStrictEqual({
      id: '3',
      email: 'admin@gmail.com',
      password: 'admin',
    })
  })

  it('should not be able signIn with email invalid', async () => {
    const wrapper = ({ children }: AuthProviderProps) => (
      <AuthProvider>{children}</AuthProvider>
    )

    const { result } = renderHook(() => useAuth(), {
      wrapper,
    })

    waitFor(() =>
      act(async () => {
        result.current.signIn('adminn@gmail.com', 'admin')
      }),
    )

    expect(result.current.user).not.toHaveProperty('id')
  })

  it('should not be able signIn with password invalid', async () => {
    const wrapper = ({ children }: AuthProviderProps) => (
      <AuthProvider>{children}</AuthProvider>
    )

    const { result } = renderHook(() => useAuth(), {
      wrapper,
    })

    waitFor(() =>
      act(async () => {
        result.current.signIn('admin@gmail.com', 'adminn')
      }),
    )

    expect(result.current.user).not.toHaveProperty('id')
  })

  it('should be able signOut', async () => {
    const wrapper = ({ children }: AuthProviderProps) => (
      <AuthProvider>{children}</AuthProvider>
    )

    const { result } = renderHook(() => useAuth(), {
      wrapper,
    })

    waitFor(() =>
      act(async () => {
        result.current.signOut()
      }),
    )

    expect(result.current.user).toStrictEqual({})
  })

  it('should be able view the on boarding', async () => {
    const wrapper = ({ children }: AuthProviderProps) => (
      <AuthProvider>{children}</AuthProvider>
    )

    const { result } = renderHook(() => useAuth(), {
      wrapper,
    })

    waitFor(() =>
      act(async () => {
        result.current.handleViewedOnboarding()
      }),
    )

    expect(result.current.viewedOnboarding).toBe(true)
  })
})
