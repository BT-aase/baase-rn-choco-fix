import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const PageOne = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notes indicate the following:</Text>
            <Image source={require('./images/page2/piece.png')} />
            <Text style={styles.text}>The position of a specific piece of candy.</Text>
            <Image source={require('./images/page2/shape.png')} />
            <Text style={styles.text}>The position of a specific shape of candy.</Text>
            <Image source={require('./images/page2/color.png')} />
            <Text style={styles.text}>The position of a specific color of candy.</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        width: 300,
        textAlign: 'center',
        fontSize: 18
    }
})

export default PageOne;