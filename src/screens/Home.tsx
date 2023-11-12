import { Text, View, ScrollView, FlatList, Linking } from 'react-native'

import { Card } from '@components/Card'
import { Header } from '@components/Header'
import { database } from '@database/database'

export function Home() {
  const trailers = database.trailers

  async function handleOpenLink(urlLink: string) {
    const supportedLink = await Linking.canOpenURL(urlLink)

    if (supportedLink) {
      Linking.openURL(urlLink)
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
      <Header image={require('../assets/images/header/poster.png')} />

      <View style={{ gap: 46 }}>
        <View className="mt-[-32px]" style={{ gap: 12 }}>
          <View className="w-full items-center justify-center">
            <Text className="font-bankgothicMedium text-[32px] leading-8 text-woodbark-400">
              JOGOS VORAZES
            </Text>
            <Text className="font-bankgothicLight text-base leading-4 text-woodbark-400">
              A CANTIGA DOS
            </Text>
            <Text className="font-bankgothicLight text-lg leading-[18px] text-woodbark-400">
              P
              <Text className="font-robotoRegular text-base leading-[18px]">
                Á
              </Text>
              SSAROS <Text className="text-base leading-[18px]">E DAS</Text>{' '}
              SERPENTES
            </Text>
          </View>

          <View
            className="mx-2 flex flex-row items-center justify-center"
            style={{ gap: 8 }}
          >
            <View className="flex-1 h-[1px] bg-woodbark-600" />
            <Text className="font-robotoRegular text-sm text-woodbark-600">
              15 de Novembro, exclusivo nos cinemas
            </Text>
            <View className="flex-1 h-[1px] bg-woodbark-600" />
          </View>
        </View>

        <View style={{ gap: 12 }}>
          <Text className="mx-6 font-robotoBold text-xl text-woodbark-400">
            TRAILERS
          </Text>

          <FlatList
            data={trailers}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Card
                width={304}
                height={171}
                image={item.pathImage}
                onPress={() => handleOpenLink(item.urlVideo)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 24,
              paddingRight: 24,
              gap: 12
            }}
          />
        </View>
      </View>
    </ScrollView>
  )
}
