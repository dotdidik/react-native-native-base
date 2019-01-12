import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Drawer,Container, Content, Text, Card, Header, Body, Button, Title, CardItem, Left, Right, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';
import MenuKiri from './MenuKiri'
export default class AppHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      headerColor: {
        color:'red'
      }
    }
  }
  openDrawer = () => {
    this._drawer._root.open()
  };
  closeDrawer = () => {
    this._drawer._root.close()
  }
  render(){
    return(
      <Drawer
            ref={(ref) => { this._drawer = ref; }}
            content={<MenuKiri navigator={this._navigator} />}
            onClose={() => this.closeDrawer()}
      >
        <Container>
        <Header>
            <Left>
              <Button transparent transparent onPress={()=> this.openDrawer()}>
              <Icon name='menu' />
              </Button>
            </Left>
            <Body><Title>UGLYFACE</Title></Body>
            <Right></Right>
        </Header>
        <Content padder>
          <Button dark bordered style = {{alignSelf: 'center', margin: 30}}
            onPress= {() => {Actions.detail(); }}>
            <Text>Goto Page 2</Text>
          </Button>
         </Content>
      </Container>
      </Drawer>
      
    );
  }
}

const styles = StyleSheet.create({
  TitleHeader:{
    fontSize:23,
    paddingTop:13,
    fontWeight:'bold' 
  }
});
