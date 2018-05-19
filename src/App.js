import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Home = () => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text>Shake your phone to open the developer menu.</Text>
  </View>
)

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Route
        exact
        path="/"
        component={Home}
      />
    </View>
  </NativeRouter>
)

export default App
