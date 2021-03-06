import React from 'react'
import { Link } from 'react-router-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Container, Left, Right, Title, Body, Content } from 'native-base'
import { compose, lifecycle } from 'recompose'
import appModule from '../modules/app'

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
        <Link to="/headerTabs">
          <Text>HeaderTabs Example</Text>
        </Link>
        <Link to="/drawer">
          <Text>Drawer Example</Text>
        </Link>
      </View>
    </Content>
  </Container>
)

export default compose(
  connect(s => s, dispatch => ({ actions: bindActionCreators(appModule.actions, dispatch) })),
  lifecycle({
    componentDidMount() {
      this.props.actions.init()
    },
  }),
)(Home)
