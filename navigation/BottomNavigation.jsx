import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router/tabs'

const BottomNavigation = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name='index'
            options={{
                href: null,
            }} />
    </Tabs>
  )
}

export default BottomNavigation