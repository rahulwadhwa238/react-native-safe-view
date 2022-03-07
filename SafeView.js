import React from 'react'
import {
    View, Platform, SafeAreaView, StatusBar
} from 'react-native'
import { colors } from '../../../constants/constants'

export default function SafeView({ children, screenMode = 'full' | 'safe' | null }) {
    return (
        screenMode == 'full' ?
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                {children}
            </View>
            :
            <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, backgroundColor: colors.white }}>
                {children}
            </SafeAreaView>
    )
}
