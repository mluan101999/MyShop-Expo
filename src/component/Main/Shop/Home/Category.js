import React, { Component, useState, useEffect } from 'react'
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import Swiper from 'react-native-swiper'

const { height, width } = Dimensions.get('window')

import littleIcon from '../../../../media/temp/little.jpg'
import maxiIcon from '../../../../media/temp/maxi.jpg'
import partyIcon from '../../../../media/temp/party.jpg'


const Category = ({ navigation,type }) => {
   
    
    return (
        <View style={styles.wrapper}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
            </View>
            <View style={{ flex: 4 }}>
                <Swiper>
                    
                    {type.map(item => 
                         <TouchableOpacity onPress={() => {
                            navigation.navigate('ListProduct');
                        }}>
                            <Image source={{uri: `http://10.79.13.100/api/app/images/type/${item.image}`}} style={styles.imageStyle}/>
                        </TouchableOpacity>
                        )}
                </Swiper>
            </View>
        </View>
    )
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FFF',
        height: height * 0.35,
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        width: "100%",
        height: "100%",
    },
})

export default Category