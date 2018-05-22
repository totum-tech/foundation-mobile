import 'es6-symbol/implement'
import React from 'react'
import PropTypes from 'prop-types'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { install } from 'redux-loop'
import logger from 'redux-logger'
import { compose, lifecycle, withStateHandlers } from 'recompose'
import { View } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'
import Expo from 'expo'

import Home from './views/Home'
import FooterTabs from './views/FooterTabs'
import HeaderTabs from './views/HeaderTabs'
import Drawer from './views/Drawer'

import appModule from './modules/app'

const store = createStore(appModule.reducer, {}, compose(applyMiddleware(logger), install()))

const App = ({ loaded }) => (
  <Provider store={store}>
    <NativeRouter>
      {loaded ? (
        <View style={{ flex: 1 }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/footerTabs" component={FooterTabs} />
          <Route exact path="/headerTabs" component={HeaderTabs} />
          <Route exact path="/drawer" component={Drawer} />
        </View>
      ) : (
        <View />
      )}
    </NativeRouter>
  </Provider>
)

App.propTypes = {
  loaded: PropTypes.bool.isRequired,
}

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
