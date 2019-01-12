import React, { Component } from 'react';

import { Container, Text, Content, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class MenuKiri extends Component{
    render() {
        return(
            <Container>
                <Content>
                    <Button transparent onPress= {() => {Actions.detail(); }}>
                        <Icon name="menu"><Text>Menu 1</Text></Icon>
                    </Button>
                </Content>
            </Container>
        )
    }
}
