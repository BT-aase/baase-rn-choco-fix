import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';

const TrayCup = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.trayCup}></View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    trayCup: {
        width: 95,
        height: 95,
        borderRadius: 50,
        borderColor: '#5F1D1D',
        borderWidth: 5,
        marginLeft: 15,
        backgroundColor: '#471616'
    }
})

export default TrayCup;