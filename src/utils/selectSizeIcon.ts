import { RFValue } from 'react-native-responsive-fontsize'

export const selectSizeIcon = (
  sizeIcon: 'xsmall' | 'small' | 'medium' | 'large',
  // eslint-disable-next-line consistent-return
) => {
  // eslint-disable-next-line default-case
  switch (sizeIcon) {
    case 'xsmall':
      return RFValue(12)
    case 'small':
      return RFValue(16)
    case 'medium':
      return RFValue(24)
    case 'large':
      return RFValue(30)
  }
}
