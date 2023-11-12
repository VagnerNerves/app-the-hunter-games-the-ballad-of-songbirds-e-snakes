import { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

import { useRoute, useNavigation } from '@react-navigation/native'

import { ActorDTO, database } from '@database/database'

import { Header } from '@components/Header'
import { Loading } from '@components/Loading'
import { Button } from '@components/Button'
import { handleOpenLink } from '@utils/linkUtils'

type RouteParamsProps = {
  id: string
}

export function Actor() {
  const [isLoading, setIsLoading] = useState(true)
  const [actor, setActor] = useState<ActorDTO>({} as ActorDTO)

  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as RouteParamsProps

  useEffect(() => {
    setIsLoading(true)

    const actorFind = database.actors.find(actor => actor.id === id)

    if (actorFind) {
      setActor(actorFind)
      setIsLoading(false)
    } else {
      navigation.goBack()
    }

    return () => setIsLoading(true)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1"
      contentContainerStyle={{ paddingBottom: 64 }}
    >
      <Header height={400} image={actor.pathImageScreenActor} isButtonGoBack />

      <View style={{ gap: 12 }} className="mt-[-32px] px-6 flex-1">
        <Text className="font-robotoBold text-[26px] text-woodbark-400">
          {actor.name}
        </Text>
        <View style={{ gap: 20 }} className="flex-1">
          <Text className="font-robotoRegular text-base text-woodbark-50">
            {actor.about}
          </Text>
          <Text className="font-robotoRegular text-base text-woodbark-50">
            <Text className="font-robotoBold">Nascimento: </Text>
            {actor.birth}
          </Text>
          <Text className="font-robotoRegular text-base text-woodbark-50">
            <Text className="font-robotoBold">Altura: </Text>
            {actor.height}
          </Text>
        </View>
        <View className="mt-6">
          <Button
            title="Instagram"
            icon="instagram"
            onPress={() => handleOpenLink(actor.urlInstagram)}
          />
        </View>
      </View>
    </ScrollView>
  )
}
