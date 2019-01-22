import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import { Container, Header, Left, Body, Right, Icon, Button, Text, Content, List, ListItem, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: []
    }
}

componentDidMount() {
    axios.get('https://learn-rest.herokuapp.com/api/products/')
    .then(res => {
        this.setState({ posts:res.data })
    })
}
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
              <Text style={{color:'#ffff'}}>Title</Text>
          </Body>
          <Right>
            <Button onPress= {() => {Actions.pageTwo(); }} transparent>
              <Icon name="ios-search" />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
          {
            this.state.posts.slice(0,2).map((post, index) =>
              <ListItem onPress= {() => {Actions.detail({pd: post})}} key={index}>
                <ListItem avatar>
                </ListItem>
                  <Left>
                    <Thumbnail source={{ uri:  post.gambar }} />
                  </Left>
                  <Body>
                    <Text>{post.nama}</Text>
                    <Text note>{post.keterangan}</Text>
                  </Body>
                  <Right>
                    <Text note>{post.harga}</Text>
                  </Right>
              </ListItem>
            )
          }
          </List>
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
