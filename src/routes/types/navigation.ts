export interface NavigationProps {
  navigate: (screen: string, params?: unknown) => void
  goBack: () => void
}
