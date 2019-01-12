import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, Left, Right, Icon, List, ListItem, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class AppDetail extends Component {
  render(){
    console.log('hy',this.props)
    return(
      <Container>
        <Header>
          <Left>
            <Button onPress={ () => {Actions.pop();} } transparent>
              <Icon name='md-arrow-round-back' />
            </Button>
          </Left>
          <Body>
              <Title>Detail</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  This is Page One, Press button to goto page two
                </Text>
              </Body>
            </CardItem>
          </Card>
         </Content>
      </Container>
    );
  }
}