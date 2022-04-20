import { RFValue } from 'react-native-responsive-fontsize'

export const selectSizeIcon = (
  sizeIcon: 'xsmall' | 'small' | 'medium' | 'large',
) => {
  switch (sizeIcon) {
    case 'xsmall':
      return RFValue(12)
    case 'small':
      return RFValue(16)
    case 'medium':
      return RFValue(24)
    case 'large':
      return RFValue(30)
    default:
      break
  }
}
