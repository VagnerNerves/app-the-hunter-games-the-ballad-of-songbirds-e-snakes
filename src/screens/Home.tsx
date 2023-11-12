import {
  Text,
  View,
  ScrollView,
  FlatList,
  Linking,
  TouchableOpacity
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { AppStackNavigatorRoutesProps } from '@routes/app.routes'

import { SpotifyLogo } from 'phosphor-react-native'

import { Card } from '@components/Card'
import { Header } from '@components/Header'
import { database } from '@database/database'

export function Home() {
  const navigation = useNavigation<AppStackNavigatorRoutesProps>()

  const trailers = database.trailers
  const synopsisFirstParagraph = database.synopsis[0]
  const actors = database.actors

  async function handleOpenLink(urlLink: string) {
    const supportedLink = await Linking.canOpenURL(urlLink)

    if (supportedLink) {
      Linking.openURL(urlLink)
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1"
      contentContainerStyle={{ paddingBottom: 64 }}
    >
      <Header
        height={345}
        image={require('../assets/images/header/poster.png')}
      />

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

        <View style={{ gap: 12 }} className="mx-6">
          <Text className="font-robotoBold text-xl text-woodbark-400">
            SINOPSE E PERSONAGENS
          </Text>
          <TouchableOpacity
            style={{ gap: 12 }}
            onPress={() => navigation.navigate('synopsis')}
          >
            <Text
              className="font-robotoRegular text-base text-woodbark-50"
              numberOfLines={4}
            >
              {synopsisFirstParagraph}
            </Text>
            <View className="flex-1 flex-row justify-end">
              <Text className="font-robotoBold text-xs underline text-woodbark-600">
                Saiba Mais
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ gap: 12 }} className="py-6 bg-woodbark-400">
          <Text className="px-6 font-robotoBold text-xl text-woodbark-900">
            ATORES
          </Text>

          <FlatList
            data={actors}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Card
                width={240}
                height={347}
                image={item.pathImageScreenHome}
                onPress={() => navigation.navigate('actor', { id: item.id })}
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

        <View className="p-6">
          <TouchableOpacity
            style={{ gap: 22 }}
            className="border-2 border-woodbark-400 rounded-xl py-[42px] px-4  flex-row items-center justify-center"
            onPress={() =>
              handleOpenLink(
                'https://open.spotify.com/playlist/37i9dQZF1DWT3BGkpbwZZs'
              )
            }
          >
            <SpotifyLogo weight="bold" size={42} color="#FBF9EB" />
            <Text className="font-robotoBold text-base text-woodbark-50 flex-1">
              Ouça agora a Playlist Oficial do Jogos Vorazes no Spoify
            </Text>
          </TouchableOpacity>
        </View>

        <View className="items-center">
          <Text className="font-robotoBold text-xl text-woodbark-400">
            LIONSGATE
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
