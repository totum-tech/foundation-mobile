import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import {
  Icon,
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

const Home = ({ history }) => (
  <Container>
    <Header>
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
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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

Home.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
}

export default Home
