import {
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native'

import { ArrowCircleLeft } from 'phosphor-react-native'

import { LinearGradient } from 'expo-linear-gradient'

interface HeaderProps {
  height: number
  image: ImageSourcePropType
  isButtonGoBack?: boolean
}

export function Header({ height, image, isButtonGoBack = false }: HeaderProps) {
  const navigation = useNavigation()

  const insets = useSafeAreaInsets()
  const topButtonGoBack = insets.top + 4

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <View style={{ height: height }} className="w-full">
      {isButtonGoBack && (
        <TouchableOpacity
          className="absolute left-6 z-10"
          style={{ top: topButtonGoBack }}
          onPress={handleGoBack}
        >
          <ArrowCircleLeft weight="fill" size={32} color="#FBF9EB" />
        </TouchableOpacity>
      )}

      <Image source={image} className="w-full h-full object-cover" />

      <LinearGradient
        colors={['transparent', '#251309']}
        className="absolute bottom-0 w-full h-14"
      />
    </View>
  )
}
