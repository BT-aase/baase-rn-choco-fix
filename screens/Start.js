import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Start = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Image style={styles.logo} source={require('./choc_fix_logo.png')} />
                <View style={styles.menuContainer}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('LevelSelect')}>
                        <View style={[styles.menuButtons, styles.boldButton]}>
                            <Text style={styles.buttonText}>--- Play ---</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('HowToPlay')}>
                        <View style={styles.menuButtons}>
                            <Text style={styles.buttonText}>How to Play</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebb482',
    },
    background: {
        height: '87%',
        width: '85%',
        marginLeft: '7.5%',
        marginTop: '15%',
        backgroundColor: '#3e2a14',
        borderColor: 'white',
        borderWidth: 5
    },
    logo: {
        height: 194,
        width: 275,
        marginHorizontal: '4%',
        marginTop: '10%'
    },
    menuContainer: {
        height: 175,
        width: 200,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: '20%',
        marginHorizontal: '15%'
    },
    menuButtons: {
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#772424',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal: 10
    },
    boldButton: {
        height: 50,
        width: 250,
        fontWeight: 'bold',
        borderWidth: 3,
        
    },
    buttonText: {
        color: 'white'
    },
})

export default Start;