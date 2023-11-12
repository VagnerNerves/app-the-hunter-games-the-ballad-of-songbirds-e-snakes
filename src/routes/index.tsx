import { View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { AppRoutes } from './app.routes'

export function Routes() {
  const theme = DefaultTheme
  theme.colors.background = '#251309'

  return (
    <View className="flex-1 bg-woodbark-950">
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
