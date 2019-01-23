import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import { Container, 
  Header, 
  Left, 
  Body, 
  Right, 
  Icon, 
  Button, 
  Text, 
  Content, 
  List, 
  ListItem, 
  Thumbnail,
  Spinner
 } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: [],
        loading: true
    }
}

componentDidMount() {
    axios.get('https://learn-rest.herokuapp.com/api/products/')
    .then(res => {
        this.setState({ posts:res.data,
        loading: false })
    })
}
  render() {
    let contentload;
    if(this.state.loading){
      contentload = <Content contentContainerStyle={{ justifyContent: 'center', flex: 1, left:'45%' }}>
                      <Bars size={15} color="blue" />
                    </Content>
    } else {
      contentload = <Content>
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
    }

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
        {contentload}
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
