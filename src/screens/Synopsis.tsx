import { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'

import { CharactersDTO, database } from '@database/database'

import { Header } from '@components/Header'
import { CardSheet } from '@components/CardSheet'
import { Loading } from '@components/Loading'

export function Synopsis() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectCharacter, setSelectCharacter] = useState<CharactersDTO>()

  const synopsis = database.synopsis
  const characters = database.characters

  function handleSelectCharacter(id: string) {
    if (selectCharacter?.id === id) {
      return
    }

    setIsLoading(true)

    const characterFind = characters.find(value => value.id === id)
    setSelectCharacter(characterFind)

    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)

    if (!selectCharacter) {
      setSelectCharacter(characters[0])
    }

    setIsLoading(false)

    return () => setIsLoading(true)
  }, [])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1"
      contentContainerStyle={{ paddingBottom: 64 }}
    >
      <Header
        height={345}
        image={require('../assets/images/header/poster.png')}
        isButtonGoBack
      />

      <View style={{ gap: 12 }} className="mt-[-32px] flex-1">
        <View style={{ gap: 12 }} className="px-6 flex-1">
          <Text className="font-robotoBold text-[26px] text-woodbark-400">
            SINOPSE E PERSONAGENS
          </Text>
          <View style={{ gap: 20 }} className="flex-1">
            {synopsis.map((value, index) => (
              <Text
                key={index.toString()}
                className="font-robotoRegular text-base text-woodbark-50"
              >
                {value}
              </Text>
            ))}
          </View>
        </View>

        <View className="pt-[26px] flex-1">
          <FlatList
            data={characters}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <CardSheet
                width={167}
                height={200}
                typeCard={index % 2 === 0 ? 'borderLeft' : 'borderRight'}
                selected={item.id === selectCharacter?.id}
                image={item.pathImage}
                onPress={() => handleSelectCharacter(item.id)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 24,
              paddingRight: 24,
              gap: 8
            }}
          />
        </View>
        <View className="px-6 flex-1">
          {isLoading ? (
            <View className="h-[100px] flex-1">
              <Loading />
            </View>
          ) : (
            <View style={{ gap: 20 }} className="flex-1">
              <Text className="font-robotoBold text-xl text-woodbark-400 text-center">
                {selectCharacter?.name}
              </Text>

              <View className="flex-1">
                {selectCharacter?.impactfulPhrase.map((value, index) => (
                  <Text
                    key={index.toString()}
                    className="font-robotoRegular text-base text-woodbark-600 text-center"
                  >
                    {value}
                  </Text>
                ))}
              </View>

              {selectCharacter?.about.map((value, index) => (
                <Text
                  key={index.toString()}
                  className="font-robotoRegular text-base text-woodbark-50"
                >
                  {value}
                </Text>
              ))}
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  )
}
