import React from 'react'
import {
    View, Platform, SafeAreaView, StatusBar
} from 'react-native'
export default function SafeView({ children, screenMode = 'safe' }) {
    return (
        screenMode != 'full' ?
            <SafeAreaView style={{ flex: 1, flexGrow: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, backgroundColor: '#FFF' }}>
                {children}
            </SafeAreaView>
            :
            <View style={{ flex: 1, flexGrow: 1, backgroundColor: '#FFF' }}>
                {children}
            </View>
    )
}
