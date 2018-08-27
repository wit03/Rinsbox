import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, Button } from 'native-base'
import CustomHeader from './CustomHeader'

class SettingsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Settings",
        headerLeft: <Icon ios='ios-menu' android="md-menu" style={{ paddingLeft: 15 }} onPress={() => navigation.openDrawer()} />,
        drawerIcon:
            <Image
                source={require('./Assets/wall.jpg')}
                style={[styles.icon]}
            />

    })

    render() {
        return (

            <Container>

                <CustomHeader
                    title="Settings"
                    drawerOpen={() => this.props.navigation.openDrawer()}
                />
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Button
                        full
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{ color: 'white' }}>Go to Home screen</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

}

export default SettingsScreen

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})