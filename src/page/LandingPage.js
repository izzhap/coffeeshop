import React, { Component } from 'react'
import { Text, Button } from 'react-native-elements'
import { View, StyleSheet, Image, StatusBar, ImageBackground } from 'react-native'
import { InputText } from '../components/InputText'
import { Context } from '../contexts/LoginContext'
import { Feather } from '@expo/vector-icons'
import { navigate } from '../navigationRef'

class LoginPage extends Component {
    static contextType = Context
    constructor(props) {
        super(props)
        this.state = {
        }
        setTimeout(() => {
            StatusBar.setBackgroundColor('transparent')
        }, 100)
    }

    render() {
        return (
            <ImageBackground
                source={require('../../assets/ice.jpg')}
                style={styles.background}
            >
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.viewHeader}>
                        <Feather size={20} name={'menu'} color={'white'} />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 20,marginTop: 20, fontWeight: 'bold', color: 'white' }}>Good Morning</Text>
                        </View>
                    </View>
                    <View style={{ height: 200, marginHorizontal: 20}}>
                        <Button buttonStyle={{marginBottom: 20, backgroundColor:'#2F8037', borderColor: 'white'}} title={'SIGN UP'} />
                        <Button buttonStyle={{ backgroundColor:'transparent',borderWidth: 2, borderColor: 'white'}} color={'transparent'} title={'LOGIN'}
                            onPress={() => {
                                navigate('Login')
                            }}
                        />
                    </View>
                </View>
            </ImageBackground>
        )
    }

}


const styles = StyleSheet.create({
    viewHeader: {
        marginTop: 20,
        height: 540,
        flexDirection: 'column',
        marginHorizontal: 20
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'flex-start',
        marginTop: 10

    },
}
)

export default LoginPage
