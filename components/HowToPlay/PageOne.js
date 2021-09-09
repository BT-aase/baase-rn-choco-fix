import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const PageOne = (props) => {
    return (
        <View style={styles.container}>
            <Image source={require('./images/page1.png')} />
            <Text style={styles.text}>To get started, pick a challenge and review the notes provided.</Text>
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
        width: 300,
        textAlign: 'center',
        fontSize: 18
    }
})

export default PageOne;