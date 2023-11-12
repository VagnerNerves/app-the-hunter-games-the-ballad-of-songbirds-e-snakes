import { Text, TouchableOpacity, View } from 'react-native'

import { InstagramLogo } from 'phosphor-react-native'

interface ButtonProps {
  title: string
  icon: 'instagram'
  onPress: () => void
}
export function Button({ title, icon, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      className="px-4 py-2 bg-woodbark-600 rounded-lg items-center justify-center"
      onPress={onPress}
    >
      <View
        className="flex-1 flex-row items-center justify-center"
        style={{ gap: 8 }}
      >
        {icon === 'instagram' && (
          <InstagramLogo weight="bold" size={24} color="#FBF9EB" />
        )}
        <Text className="font-robotoBold text-sm text-woodbark-50">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
