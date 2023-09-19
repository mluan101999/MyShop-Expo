import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const { height } = Dimensions.get('window')
import Home from './Home/Home'
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';

import Header from './Header';

const home = require('../../../media/appIcon/home.png');
const home0 = require('../../../media/appIcon/home0.png');
const cart = require('../../../media/appIcon/cart.png');
const cart0 = require('../../../media/appIcon/cart0.png');
const contact = require('../../../media/appIcon/contact.png');
const contact0 = require('../../../media/appIcon/contact0.png');
const search = require('../../../media/appIcon/search.png');
const search0 = require('../../../media/appIcon/search0.png');

const Shop = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#85A6C9' }}>
            <Header navigation={navigation} />
            <Tab.Navigator
                screenOptions={{ headerShown: false, tabBarActiveTintColor: 'green', tabBarInactiveTintColor: 'gray' }}
            // screenOptions={({route}) => ({
            //     headerTitle: () => <Text>Header</Text>,
            //     tabBarIcon: ({focused,color,size,padding}) => {
            //         let iconName;
            //         if(route.name === 'Home') {
            //             iconName = focused ? home : home0;
            //         } else if (route.name === 'Cart') {
            //             iconName = focused ? cart : cart0;
            //         } else if (route.name === 'Search') {
            //             iconName = focused ? search : search0;
            //         } else if (route.name === 'Cont
            //     }
            // })}
            >

                <Tab.Screen name="Home" component={Home} screenOptions
                    options={{
                        tabBarIcon: ({ focused, route }) => {
                            return <Image source={home0} style={{ width: 30, height: 30 }} />
                        }
                    }} />
                <Tab.Screen name="Cart" component={Cart} screenOptions
                    options={{
                        tabBarIcon: () => {
                            return <Image source={cart0} style={{ width: 30, height: 30 }} />
                        },
                        tabBarBadge: 1,

                    }}

                />
                <Tab.Screen name="Search" component={Search} screenOptions
                    options={{
                        tabBarIcon: () => {
                            return <Image source={search0} style={{ width: 30, height: 30 }} />
                        }
                    }} />
                <Tab.Screen name="Contact" component={Contact} screenOptions
                    options={{
                        tabBarIcon: () => {
                            return <Image source={contact0} style={{ width: 30, height: 30 }} />
                        }
                    }} />
            </Tab.Navigator>
        </View>
    )
}

export default Shop