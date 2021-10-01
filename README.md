# react-native-safe-view

This View can be used in place of <b>SafeAreaView</b> in <b>react-native</b>.
#### Works for both Android and iOS.

### props                     

| Name | Default | Description |
| :--------- |:------:| :------------------------|
| screenMode | 'safe' | This defines the screen area to be covered by the SafeView. It can be 'full' which cover the whole screen and 'safe' which cover only the safe area of the screen. | 

### usage

import React from 'react'
import { Text } from 'react-native'
import SafeView from './SafeView'

export default const App = () => {

  return(
    <SafeView>
      <Text>This is a text component inside a safe view which works on both iOS and Android.</Text>
    </SafeView>
  )
}
