import React from 'react'
import { compose, lifecycle, withStateHandlers } from 'recompose'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Container, Left, Right, Title, Body } from 'native-base'
import { NativeRouter, Route } from 'react-router-native'
import Expo from 'expo'

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

const App = ({ loaded }) => (
  <NativeRouter>
    {loaded ? (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Foundation</Title>
          </Body>
          <Right />
        </Header>
        <Body>
          <Route exact path="/" component={Home} />
        </Body>
      </Container>
    ) : (
      <View />
    )}
  </NativeRouter>
)

export default compose(
  withStateHandlers({ loaded: false }, { setLoaded: () => loaded => ({ loaded }) }),
  lifecycle({
    componentWillMount() {
      Expo.Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      }).then(() => {
        this.props.setLoaded(true)
      })
    },
  }),
)(App)
