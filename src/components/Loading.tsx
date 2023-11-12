import { ActivityIndicator, View } from 'react-native'

export function Loading() {
  return (
    <View className="flex-1 justify-center items-center bg-woodbark-950">
      <ActivityIndicator color="#DBAD34" />
    </View>
  )
}
