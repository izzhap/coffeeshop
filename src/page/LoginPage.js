import React, { Component } from 'react'
import { Text, Button } from 'react-native-elements'
import { View, StyleSheet, Image, StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import { InputText } from '../components/InputText'
import { Context } from '../contexts/LoginContext'
import { Feather } from '@expo/vector-icons'
import { navigate } from '../navigationRef'

class LoginPage extends Component {
    static contextType = Context
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            iconEye: 'eye',
            errorEmail: '',
            errorPassword: '',
            isLoading: false
        }
        setTimeout(() => {
            StatusBar.setBackgroundColor('transparent')
        }, 100)
    }
    setLoadingButton = (isActive) => {
        this.setState({
            isLoading: isActive
        })
    }
    setEmail = (value) => {
        this.setState({
            email: value
        })
    }
    setPassword = (value) => {
        this.setState({
            password: value
        })
    }
    setErrorEmail = (value) => {
        this.setState({
            errorEmail: value
        })
    }
    setErrorPassword = (value) => {
        this.setState({
            errorPassword: value
        })
    }
    setIcon = (value) => {
        this.setState({
            iconEye: value
        })
    }

    onUpdateValue = (isPassword, updatedValue) => {
        if (isPassword) {
            return this.setPassword(updatedValue ? updatedValue : '')
        }
        this.context.reset()
        this.setPassword('')
        this.setErrorPassword('')
        return this.setEmail(updatedValue ? updatedValue : '')
    }
    componentDidMount() {
        this.context.reset()
    }
    validateButton = (email, password, isNext) => {
        if (isNext) {
            if (email) return false
            else return true
        }
        if (password) return false
        else return true
    }
    render() {
        const { state, doEmail, doPassword } = this.context
        const { dataEmail, dataPassword, dataId } = state
        return (
            <View style={styles.viewContainer}>
                <ImageBackground
                    blurRadius={10}
                    source={require('../../assets/ice.jpg')}
                    style={styles.background}
                >
                    <View style={styles.viewHeader}>
                        <Feather size={20} name={'menu'} color={'white'} />
                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Login</Text>
                        </View>
                    </View>
                    <View style={styles.viewMain}>
                        <Text style={{color: 'white'}}>Email Address</Text>
                        <InputText
                            value={this.state.email}
                            onUpdateValue={this.onUpdateValue}
                            textInputStyles={{
                                fontSize: 15,
                            }}
                            otherTextInputProps={{
                                maxLength: 20,
                            }}
                            isPassword={false}
                            setIconEye={this.setIcon}
                            iconEye={this.state.iconEye}
                        />
                        {this.state.errorEmail ? <Text style={styles.errorMsgText}>{this.state.errorEmail}</Text> : null}
                        <Text style={{color: 'white'}}>Password</Text>
                        <InputText
                            value={this.state.password}
                            onUpdateValue={this.onUpdateValue}
                            isPassword={true}
                            setIconEye={this.setIcon}
                            iconEye={this.state.iconEye}
                        />
                        {this.state.errorPassword ? <Text style={styles.errorMsgText}>{this.state.errorPassword}</Text> : null}
                        <Button
                            loading={this.state.isLoading}
                            buttonStyle={{ backgroundColor: '#2F8037' }}
                            title='LOGIN'
                            onPress={() => {
                                // this.setLoadingButton(true)
                                // if (!dataEmail) {
                                //     doEmail(this.state.email, (msg) => {
                                //         this.setErrorEmail(msg)
                                //         this.setLoadingButton(false)
                                //     })
                                // } else if (dataEmail && !dataPassword) {
                                //     doPassword(dataId, this.state.password, (msg) => {
                                //         this.setErrorPassword(msg)
                                //         this.setLoadingButton(false)
                                //     })
                                // }
                                navigate('Home')
                            }} />
                        <View style={styles.viewBottom}>
                            <Text h5 style={styles.signUp}>Not registered yet? Sign up </Text>
                            <Text h5 style={styles.signUp}>here</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                //this.props.navigation.navigate('Main')
                            }}>
                            <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
                                <Text h5 style={styles.forgotText}>Forgot Password?</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    forgotText: {
        fontSize: 16,
        justifyContent: 'center',
        color: 'white'
    },
    headerText: {
        fontSize: 15,
        color: 'black',
        paddingTop: 10
    },
    errorMsgText: {
        fontSize: 15,
        color: 'red'
    },
    button: {
        paddingTop: 20,
        color: 'red'
    },
    image: {
        width: 160,
        height: 30
    },
    viewBottom: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 30

    }
    ,
    signUp: {
        fontSize: 16,
        color: 'white'
    },
    viewTop: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    viewHeader: {
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'flex-start',
        marginTop: 10

    },
    viewMain: {
        padding: 20,
    }

}
)

export default LoginPage
