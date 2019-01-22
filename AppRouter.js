import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import App from './App';
import AppSearch from './AppSearch';
import PostDetail from './PostDetail';

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene hideNavBar="true" key="pageone" component={App} title="PageOne" initial={true} />
          <Scene hideNavBar="true" key="pageTwo" component={AppSearch} />
          <Scene hideNavBar="true" key="detail" component={PostDetail} />
        </Scene>
      </Router>
    )
  }
}