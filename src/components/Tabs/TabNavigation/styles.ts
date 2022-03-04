import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs'

import { fonts } from '../../../styles/theme/fonts'
import { colors } from '../../../styles/theme/colors'

export const styles: MaterialTopTabNavigationOptions = {
  tabBarScrollEnabled: false,
  tabBarLabelStyle: {
    fontSize: fonts.sizes.medium,
    fontFamily: fonts.medium,
    textTransform: 'capitalize',
  },
  tabBarIndicatorStyle: {
    width: '30%',
    backgroundColor: colors.primary,
    height: 3,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    left: 10,
  },
  tabBarPressColor: colors.white,
  tabBarStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral,
  },
  tabBarTestID: 'tab-bar',
}
