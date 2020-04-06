import React, { useState } from 'react'
import { Switch, View } from 'react-native'
import Amplify from '@aws-amplify/core'
import { ThemeProvider, DarkTheme, LightTheme } from 'react-native-unicorn-uikit'
import UIKit from './UIKit'

import awsconfig from '../aws-exports'

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
})

const App = () => {
  const [value, setValue] = useState(!false)
  const dev = true
  const theme = value ? DarkTheme : LightTheme
  return (
    <>
      <ThemeProvider theme={theme}>
        {dev && (
          <View style={{ backgroundColor: value ? '#1D1E1F' : '#fff', height: 90 }}>
            <Switch onValueChange={setValue} value={value} style={{ alignSelf: 'center', marginTop: 50 }} />
          </View>
        )}
        <UIKit />
      </ThemeProvider>
    </>
  )
}

export default App
