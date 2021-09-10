import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const PageThree = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Each note represents a section of the tray. Some notes indicate a specific section on the tray.</Text>
            <Image source={require('./images/page3.png')} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        width: 280,
        textAlign: 'center',
        fontSize: 18
    }
})

export default PageThree;