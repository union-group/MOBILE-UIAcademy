/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { listUsers, User } from '../../utils/listUsers'

export interface AuthProviderProps {
  children: React.ReactNode
}

export interface AuthContextData {
  user: User
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  viewedOnboarding: boolean
  handleViewedOnboarding: () => Promise<void>
  loadingAuth: boolean
}

export const AuthContext = createContext({} as AuthContextData)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User)
  const [viewedOnboarding, setViewedOnboarding] = useState(false)
  const [loadingAuth, setLoadingAuth] = useState(false)

  const userAuthStorageKey = '@mobileUiAcademy:userAuth'
  const viewedOnboardingStorageKey =
    '@mobileUiAcademy:viewedOnboarding'

  const signIn = useCallback(
    async (email: string, password: string) => {
      const response = listUsers.find(
        (userValidate) => userValidate.email === email,
      )

      if (!response) {
        Alert.alert(
          'Usuário inexistente',
          'Não existe nenhum usuário com esse e-mail',
        )
        return
      }

      if (response.password === password) {
        const data = {
          id: response.id,
          email,
          password,
        } as User

        setUser(data)
        await AsyncStorage.setItem(
          userAuthStorageKey,
          JSON.stringify(data),
        )
      } else {
        Alert.alert('Usuário inválido', 'E-mail ou senha incorreta')
      }
    },
    [],
  )

  const signOut = useCallback(async () => {
    setUser({} as User)
    await AsyncStorage.removeItem(userAuthStorageKey)
  }, [])

  const handleViewedOnboarding = useCallback(async () => {
    setViewedOnboarding(true)
    await AsyncStorage.setItem(
      viewedOnboardingStorageKey,
      JSON.stringify(true),
    )
  }, [])

  useEffect(() => {
    async function loadUserAuthInStorage() {
      const userAuthInStorage = await AsyncStorage.getItem(
        userAuthStorageKey,
      )

      if (userAuthInStorage) {
        const userAuthLogged = JSON.parse(userAuthInStorage) as User
        signIn(userAuthLogged.email, userAuthLogged.password)
      }

      const viewedOnboardingInStorage = await AsyncStorage.getItem(
        viewedOnboardingStorageKey,
      )

      if (viewedOnboardingInStorage) {
        setViewedOnboarding(true)
      }

      setLoadingAuth(true)
    }

    loadUserAuthInStorage()
  }, [signIn, handleViewedOnboarding])

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        viewedOnboarding,
        handleViewedOnboarding,
        loadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
