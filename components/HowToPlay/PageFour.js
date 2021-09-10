import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const PageFour = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Note that in some cases, notes could have several possible locations. These pieces are found in relationship to each other as shown, but they could be in any of four locations.
            </Text>
            <Image source={require('./images/page4.png')} />
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

export default PageFour;