import { TouchableOpacity, ImageSourcePropType, Image } from 'react-native'

interface CardProps {
  width: number
  height: number
  image: ImageSourcePropType
  onPress: () => void
}
export function Card({ width, height, image, onPress }: CardProps) {
  return (
    <TouchableOpacity
      className="bg-black rounded-xl"
      style={{ width: width, height: height }}
      onPress={onPress}
    >
      <Image source={image} className="w-full h-full object-cover" />
    </TouchableOpacity>
  )
}
