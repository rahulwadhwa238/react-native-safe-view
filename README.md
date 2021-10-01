# react-native-safe-view

This View can be used in place of <b>SafeAreaView</b> in <b>react-native</b>.
#### Works for both Android and iOS.

### props                     

| Name | Default | Description |
| :--------- |:------:| :------------------------|
| screenMode | 'safe' | This defines the screen area to be covered by the SafeView. It can be 'full' which cover the whole screen and 'safe' which cover only the safe area of the screen. | 

### usage

import React from 'react'<br>
import { Text } from 'react-native'<br>
import SafeView from './SafeView'<br>
<br>
export default const App = () => {<br>
<br>
&nbsp;return(<br>
&nbsp;&nbsp;<SafeView><br>
&nbsp;&nbsp;&nbsp;<Text>This is a text component inside a safe view which works on both iOS and Android.</Text><br>
&nbsp;&nbsp;</SafeView><br>
&nbsp;)<br>
}<br>
