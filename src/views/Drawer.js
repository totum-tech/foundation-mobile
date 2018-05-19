import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Icon,
  Drawer,
  Header,
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
  sidebar: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

const Sidebar = () => (
  <View style={styles.sidebar}>
    <View>
      <Text>One</Text>
    </View>
    <View>
      <Text>Two</Text>
    </View>
  </View>
)

class DrawerExample extends React.Component {
  componentDidMount() {
    this.drawer._root.open()
  }
  closeDrawer = () => {
    this.drawer._root.close()
  }
  openDrawer = () => {
    this.drawer._root.open()
  }
  render() {
    const { history } = this.props

    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref
        }}
        content={<Sidebar />}
        onClose={() => this.closeDrawer()}
      >
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
            <View style={styles.container}>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>
            </View>
          </Content>
        </Container>
      </Drawer>
    )
  }
}

export default DrawerExample
