import React, { ReactNode } from 'react'
import { AuthProvider } from './useAuth'

import { VideoProvider } from './useVideo'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      <VideoProvider>{children}</VideoProvider>
    </AuthProvider>
  )
}
