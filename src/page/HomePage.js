import React, { Component } from "react";
import { StatusBar, ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import { navigate } from '../navigationRef'
import SwipeUpDown from 'react-native-swipe-up-down';


class MenuPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        setTimeout(() => {
            StatusBar.setBackgroundColor('transparent')
        }, 100)
    }
    render() {
        const MainView = () => {
            return (<View style={{ flexDirection: 'column' }}>
                <View style={styles.viewHeader}>
                    <Feather size={20} name={'menu'} color={'white'} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.headerText}>How's your day? Need a coffee break?</Text>
                        <Text style={styles.headerText}>Guntur Saputi</Text>
                        <Text style={styles.headerText}>IDR 279000</Text>
                        <Text style={styles.headerText}>1 Beans</Text>

                    </View>
                </View>
                <View style={{ height: 200, marginHorizontal: 20 }}>
                </View>
            </View>)
        }
        const SwipeView = () => {
            return (
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Prime to Pay</Text>
                    <Text style={{ fontSize: 18, color: 'grey' }}>Show below QR Code to the cashier</Text>
                    <Text style={{ fontSize: 14 }}>Kartu Satu</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'green' }}>Balance</Text>
                        <Text>IDR 279000</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'green' }}>Beans</Text>
                        <Text>1</Text>
                    </View>
                    <TouchableOpacity
                    onPress={()=>{
                        navigate('Menu')
                    }}>
                        <View style={{ height: '100%', alignItems: 'center', marginTop: 20 }}>
                            <Image source={require('../../assets/qr.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
        return (
            <ImageBackground
                blurRadius={10}
                source={require('../../assets/ice.jpg')}
                style={styles.background}

            >
                <MainView />
                <SwipeUpDown
                    itemMini={<SwipeView />}
                    itemFull={<SwipeView />}
                    disablePressToShow={false}
                    style={{ backgroundColor: 'rgba(150, 150, 150, 0.8)' }}
                    swipeHeight={50}

                />

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
    headerText: { fontSize: 20, marginTop: 20, color: 'white' }
})

export default MenuPage