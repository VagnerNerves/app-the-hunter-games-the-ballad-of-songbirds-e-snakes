import { StatusBar } from 'react-native'

import { useFonts } from 'expo-font'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Loading } from '@components/Loading'
import { Routes } from '@routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    BankGothic_Light: require('./assets/fonts/BankGothicLight.otf'),
    BankGothic_Medium: require('./assets/fonts/BankGothicMedium.otf'),
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </>
  )
}
