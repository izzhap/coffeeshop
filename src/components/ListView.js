import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const ListView = () => {
    const [isShow, setShow] = useState(false)

    const coffee = [
        { id: '1', name: 'Caramel Signature Chocolate', src: require('../../assets/kopi1.jpg') },
        { id: '2', name: 'Caramel Signature Chocolate', src: require('../../assets/kopi2.jpg') },
        { id: '3', name: 'Caramel Signature Chocolate', src: require('../../assets/kopi3.jpg') },
    ]
    const ListImage = () => {
        return (
            <View>
                <FlatList
                    data={coffee}
                    numColumns={2}
                    keyExtractor={chat => chat.id}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity>
                                    <View>
                                        <Image
                                            source={item.src}
                                            style={{ height: 200, width: 200, margin: 3 }}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }} />
            </View>
        )
    }
    return (
        <View>
            <TouchableOpacity
            onPress={()=>{
                isShow ? setShow(false) : setShow(true)
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: '#D3D3D3' }}>
                    <Text style={{ fontSize: 18 }}>
                        Non Coffee
            </Text>
                    <Entypo name="chevron-down" size={24} color="black" />
                </View>
            </TouchableOpacity>
            {isShow ? <ListImage /> : null}
        </View>
    )
}
export default ListView