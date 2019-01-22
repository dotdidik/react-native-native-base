import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Header, Body, Content, Left, Button, Icon, Item, Input } from 'native-base'
import axios from 'axios';

export default class AppSearch extends Component {
  render() {
    return (
      <Container>
        <Header >
            <Left>
                <Button transparent onPress= {() => {Actions.pop()}} >
                    <Icon name="md-arrow-back" />
                </Button>
            </Left>
            <Body>
                <Input placeholder="Search" />
            </Body>
        </Header>
        <Content>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
