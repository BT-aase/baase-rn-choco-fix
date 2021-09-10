import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const PageFive = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Start with the clues that show the position of a specific piece of candy.</Text>
            <Image source={require('./images/page5.png')} />
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

export default PageFive;