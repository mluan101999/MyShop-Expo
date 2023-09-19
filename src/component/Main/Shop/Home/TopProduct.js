import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import sp1 from '../../../../media/temp/sp1.jpeg'
import sp2 from '../../../../media/temp/sp2.jpeg'
import sp3 from '../../../../media/temp/sp3.jpeg'
import sp4 from '../../../../media/temp/sp4.jpeg'
import sp5 from '../../../../media/temp/sp5.jpeg'

const TopProduct = ({ navigation,product }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.tittle}>TOP PRODUCT</Text>
            </View>
            <View style={styles.body}>
                {product.map(item => 
                <TouchableOpacity style={styles.productContainer} onPress={() => {
                    navigation.navigate('ProductDetail',{
                        productName : item.name,
                        des: item.description,
                        price: item.price,
                        material: item.material,
                        color: item.color,
                    });
                }}>
                    <Image source={{ uri: `http://10.79.13.100/api/app/images/product/${item.images[0]}` }} style={styles.productImage} />
                    <Text style={styles.productName}>{item.name.toUpperCase()}</Text>
                    <Text style={styles.productPrice}>{item.price}$</Text>
                </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const { width } = Dimensions.get('window');
const productWidth = (width - 60) / 2;
const productHeight = (productWidth / 361) * 452


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,

    },
    tittle: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingBottom: 10,
    },
    productContainer: {
        width: productWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    productImage: {
        width: productWidth,
        height: productHeight
    },
    productName: {
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 10,
        marginVertical: 5,
    },
    productPrice: {
        color: '#662F90',
        fontWeight: 'bold',
        paddingLeft: 10,
        marginBottom: 5
    },
})
export default TopProduct