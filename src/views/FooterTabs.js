import React from 'react'
import { Link } from 'react-router-native'
import { StyleSheet, View } from 'react-native'
import {
  Header,
  Container,
  Left,
  Right,
  Title,
  Body,
  Content,
  Text,
  Footer,
  FooterTab,
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

const Home = () => (
  <Container>
    <Header>
      <Left />
      <Body>
        <Title>Foundation</Title>
      </Body>
      <Right />
    </Header>
    <Content>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Link to="/">
          <Text>Home</Text>
        </Link>
      </View>
    </Content>
    <Footer>
      <FooterTab>
        <Button>
          <Text>One</Text>
        </Button>
        <Button>
          <Text>Two</Text>
        </Button>
        <Button>
          <Text>Three</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
)

export default Home
