import React from 'react'
import { Link } from 'react-router-native'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Container, Left, Right, Title, Body, Content } from 'native-base'

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
        <Link to="/footerTabs">
          <Text>Footer Tabs Example</Text>
        </Link>
      </View>
    </Content>
  </Container>
)

export default Home
