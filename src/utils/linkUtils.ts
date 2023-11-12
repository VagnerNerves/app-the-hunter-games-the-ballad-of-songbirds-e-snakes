import { Linking } from 'react-native'

export async function handleOpenLink(urlLink: string) {
  const supportedLink = await Linking.canOpenURL(urlLink)

  if (supportedLink) {
    Linking.openURL(urlLink)
  }
}
