/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

export interface VideoStatusProps {
  isPlaying?: boolean
  isLoaded?: boolean
  androidImplementation?: string
  error?: string
  durationMillis?: number
  positionMillis?: number
  shouldPlay?: boolean
  rate?: number
  isLooping?: boolean
}

export interface VideoContextData {
  isFullScreen: boolean
  videoStatus: VideoStatusProps
  changeFullScreenValue?: () => void
  setVideoStatus?: React.Dispatch<
    React.SetStateAction<VideoStatusProps>
  >
  onPrevious?: () => void
  onNext?: () => void
}

export interface VideoProviderProps {
  children: React.ReactNode
}

export const VideoContextDefaultValues = {
  isFullScreen: false,
  videoStatus: {
    durationMillis: 0,
    positionMillis: 0,
    isPlaying: false,
  },
}

export const VideoContext = createContext<VideoContextData>(
  VideoContextDefaultValues,
)

const VideoProvider = ({ children }: VideoProviderProps) => {
  const [videoStatus, setVideoStatus] = useState(
    {} as VideoStatusProps,
  )
  const [isFullScreen, setIsFullScreen] = useState(false)

  const changeFullScreenValue = useCallback(() => {
    setIsFullScreen((prevState) => !prevState)
  }, [])

  const onPrevious = () => {
    // code
  }

  const onNext = () => {
    // code
  }

  return (
    <VideoContext.Provider
      value={{
        isFullScreen,
        videoStatus,
        changeFullScreenValue,
        setVideoStatus,
        onPrevious,
        onNext,
      }}
    >
      {children}
    </VideoContext.Provider>
  )
}

const useVideo = () => useContext(VideoContext)

export { VideoProvider, useVideo }
