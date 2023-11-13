import { Image, TouchableOpacity, ImageSourcePropType } from 'react-native'

interface CardSheetProps {
  width: number
  height: number
  typeCard: 'borderLeft' | 'borderRight'
  selected: boolean
  image: ImageSourcePropType
  onPress: () => void
}
export function CardSheet({
  width,
  height,
  typeCard,
  selected,
  image,
  onPress
}: CardSheetProps) {
  const classRounded = ''
  typeCard === 'borderLeft'
    ? 'rounded-tl-3xl rounded-br-3xl'
    : 'rounded-tr-3xl rounded-bl-3xl'

  const classColorSelected =
    selected === true ? 'border-woodbark-400' : 'border-woodbark-950'

  return (
    <TouchableOpacity
      className={`overflow-hidden rounded-tl-3xl border-[1px] ${classRounded} ${classColorSelected}`}
      style={{ width: width, height: height }}
      onPress={onPress}
    >
      <Image source={image} className="w-full h-full object-cover" />
    </TouchableOpacity>
  )
}
