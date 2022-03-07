import React from 'react'
import {
    View, Platform, SafeAreaView, StatusBar
} from 'react-native'
export default function SafeView({ children, screenMode = 'full' | 'safe' | undefined }) {
    return (
        screenMode == 'full' ?
            <View style={{ flex: 1, flexGrow: 1, backgroundColor: '#FFF', }}>
                {children}
            </View>
            :
            <SafeAreaView style={{ flex: 1, flexGrow: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, backgroundColor: '#FFF' }}>
                {children}
            </SafeAreaView>
    )
}
