import React, { Component } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import { navigate } from '../navigationRef'
import ListView from '../components/ListView'
import {
    Container,
    Header,
    Button,
    Body,
    Title,
    Right,
    Text,
    Tabs,
    Tab,
    TabHeading,
    Badge,
    Icon,
    Fab
} from 'native-base'

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
        return (
            <View style={styles.viewContainer}>
                <View style={styles.viewHeader}>
                    <Feather size={20} name={'menu'} color={'black'} />
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Login</Text>
                    </View>
                </View>
                <Tabs
                    initialPage={0}
                    tabBarBackgroundColor='#2ECC6D'
                    tabContainerStyle={{ elevation: 0 }}
                    tabBarUnderlineStyle={styles.tabBarUnderLine}>
                    {/* TODO: Change textcolor unselect */}
                    <Tab
                        heading={
                            <TabHeading style={{ backgroundColor: 'white' }}>
                                <Text style={styles.tabsText}>DRINKS</Text>
                            </TabHeading>
                        }>
                        <ListView />
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading style={{ backgroundColor: 'white' }}>
                                <Text style={styles.tabsText}>FOOD</Text>
                            </TabHeading>
                        }>
                        <Text>FOOD</Text>
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: 'white' }}>
                            <Text style={styles.tabsText}>MERCHANDISE</Text>
                        </TabHeading>
                    }>
                        <Text>MERCHANDISE</Text>
                    </Tab>
                </Tabs>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewHeader: {
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        borderBottomColor: 'grey',
        paddingBottom: 20,
        borderBottomWidth: 1
    },
    viewContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    tabsText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black'
    },
    tabBarUnderLine: {
        height: 2
    },
})

export default MenuPage