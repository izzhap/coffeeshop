import React, { Component } from 'react';
import { View, Animated, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { string, func, object, number } from 'prop-types';
import { Feather } from '@expo/vector-icons'
import { Context } from '../contexts/LoginContext'

export class InputText extends Component {
  static contextType = Context

  static propTypes = {
    value: string.isRequired,
    onUpdateValue: func.isRequired,
    keyboardType: string,
    titleActiveSize: number,
    titleInActiveSize: number,
    titleActiveColor: string,
    titleInactiveColor: string,
    textInputStyles: object,
    otherTextInputProps: object,
    iconEye: string,
    setIconEye: func,
  }


  static defaultProps = {
    keyboardType: 'default',
    titleActiveSize: 15,
    titleInActiveSize: 15,
    titleActiveColor: 'black',
    titleInactiveColor: 'dimgrey',
    textInputStyles: {},
    otherTextInputAttributes: {},
  }

  constructor(props) {
    super(props);
    const { value } = this.props ? this.props : "";
    this.position = new Animated.Value(value ? 1 : 0);
    this.state = {
      isFieldActive: false,
    }

  }


  _onChangeEyeIcon = () => {
    this.props.iconEye == 'eye' ? this.props.setIconEye('eye-off') : this.props.setIconEye('eye')
  }


  _returnAnimatedTitleStyles = () => {

    return {
      top: this.position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0],
      }),
    }
  }


  render() {
    return (
      <View style={Styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 8.5 }}>
            <TextInput
              value={this.props.value}
              style={[Styles.textInput, this.props.textInputStyles]}
              underlineColorAndroid='transparent'
              onChangeText={(content) => {
                this.props.onUpdateValue(this.props.isPassword, content)
              }}
              keyboardType={this.props.keyboardType}
              {...this.props.otherTextInputProps}
              secureTextEntry={this.props.isPassword && this.props.iconEye == 'eye' ? true : false}
            />
          </View>
          <View style={Styles.iconStyle}>
            {this.props.isPassword ?
              <TouchableOpacity onPress={this._onChangeEyeIcon}>
                <Feather style={{ marginLeft: 30 }} size={20} name={this.props.iconEye} />
              </TouchableOpacity>
              : null}

          </View>
        </View>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'silver',
    marginVertical: 4,
    marginBottom: 30
  },
  textInput: {
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 15,
    color: 'black',

  },
  titleStyles: {
    position: 'absolute',
    left: 3,
    left: 4,
  },
  iconStyle: {
    marginTop: 20,
    marginRight: 5,
    flex: 1.5, flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-end'
  }
})