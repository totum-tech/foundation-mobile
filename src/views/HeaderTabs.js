import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Icon,
  Header,
  Tabs,
  Tab,
  Container,
  Left,
  Right,
  Title,
  Body,
  Content,
  Text,
  Button,
} from 'native-base'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Home = ({ history }) => (
  <Container>
    <Header hasTabs>
      <Left>
        <Button transparent onPress={history.goBack}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>Foundation</Title>
      </Body>
      <Right />
    </Header>
    <Content>
      <Tabs initialPage={1}>
        <Tab heading="Tab1">
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
        </Tab>
        <Tab heading="Tab2">
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
        </Tab>
        <Tab heading="Tab3">
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
        </Tab>
      </Tabs>
    </Content>
  </Container>
)

export default Home
