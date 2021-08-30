import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Buttons = (props) => {
    console.log(props)
    return (
        <View style={styles.buttons}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={props.openMenu}>
                    <View style={styles.menu}>
                        <Text style={styles.buttonText}>{props.menu.toString()}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.order}>
                        <Text style={styles.buttonText}>- Notes -</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.check}>
                        <Icon name="checkmark-circle-outline" size={28} color='white'/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    buttons: {
        height: '8%',
        width: '100%',
        backgroundColor: '#4a4a4a',
    },
    buttonContainer: {
        height: '8%',
        width: '100%',
        marginTop: 5,
        marginLeft: 15,
        flexDirection: 'row'
    },
    menu: {
        height: 50,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#772424',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal: 10
    },
    order: {
        height: 50,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#772424',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal: 10
    },
    check: {
        height: 50,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007f00',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal: 10
    },
    buttonText: {
        color: 'white'
    }
});

export default Buttons;