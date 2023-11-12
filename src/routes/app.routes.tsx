import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack'
import { Actor } from '@screens/Actor'

import { Home } from '@screens/Home'
import { Synopsis } from '@screens/Synopsis'

type NativeStackRoutes = {
  home: undefined
  synopsis: undefined
  actor: { id: string }
}

export type AppStackNavigatorRoutesProps =
  NativeStackNavigationProp<NativeStackRoutes>

const NativeStackTab = createNativeStackNavigator<NativeStackRoutes>()

export function AppRoutes() {
  return (
    <NativeStackTab.Navigator screenOptions={{ headerShown: false }}>
      <NativeStackTab.Screen name="home" component={Home} />
      <NativeStackTab.Screen name="synopsis" component={Synopsis} />
      <NativeStackTab.Screen name="actor" component={Actor} />
    </NativeStackTab.Navigator>
  )
}
