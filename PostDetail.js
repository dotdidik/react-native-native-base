import React, { Component } from 'react'
import { Container, Text, Header, Content, Left, Button, Icon, Body, Right, Title } from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PostDetail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log("detail", this.props.pd)
        return(
            <Container>
                <Header>
                <Left>
                    <Button transparent onPress= {() => {Actions.pop()}} >
                        <Icon name="md-arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.pd.nama}</Title>
                </Body>
                <Right />
                </Header>
                <Content>
                <Image source={{uri: this.props.pd.gambar}} style={{height: 200, width: null, flex: 1}}/>
                <Text>{this.props.pd.alamat}</Text>
                <Text>{this.props.pd.harga}</Text>
                </Content>
            </Container>
        )
    }
}
