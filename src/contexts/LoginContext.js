import createDataContext from "./createDataContext"
import bwcApi from '../api/technop'
import { navigate } from '../../src/navigationRef'
var md5 = require('md5');


const loginReducer = (state, action) => {
    switch (action.type) {
        case 'email':
            return { ...state, dataId: action.payload.id, dataEmail: action.payload.email }
        case 'password':
            return { ...state, dataPassword: action.payload }
        case 'reset':
            return { ...state, dataEmail: '', dataPassword: '', dataId: '' }
        default:
            return state;
    }
}

const reset = (dispatch) => () => {
    dispatch({ type: 'reset' })
}

const doEmail = (dispatch) => async (email, callback) => {
    const response = await bwcApi.get('/usr')
    if(!email==''){
        for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].email === email) {
                callback("")
                return dispatch({ type: 'email', payload:response.data[i] })
            }
        }
        return callback("*Email tidak ditemukan")
    }else return callback("*Email tidak boleh kosong")
}

const doPassword = (dispatch) => async (id, password, callback) => {
    const response = await bwcApi.get('/usr')
    if(!password==''){
        for (var i = 0; i < response.data.length; i++) {
            console.log(response.data[i].password+" || "+md5(password))
            if (response.data[i].id === id && response.data[i].password === md5(password)) {
                navigate('Main')
                return dispatch({ type: 'password', payload: password })
            }
        }
        return callback("*Password tidak sesuai")
    }else return callback("*Password tidak boleh kosong")
}

export const { Context, Provider } = createDataContext(
    loginReducer,
    {
        doEmail,
        doPassword,
        reset
    },
    { dataEmail: '', dataPassword: '', dataId: '' }
)