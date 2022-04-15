import React, { ReactNode } from 'react'

import { VideoProvider } from './useVideo'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <VideoProvider>{children}</VideoProvider>
}
