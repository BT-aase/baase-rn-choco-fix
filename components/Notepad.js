import React from 'react';
import { View, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const Notepad = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
        >
            <TouchableOpacity onPress={props.onClose} style={{ flex: 1 }}>
                <View style={styles.spiralContainer}>
                    <View style={styles.spiral}>
                        <View style={styles.loop} />
                        <View style={styles.hole} />
                    </View>
                    <View style={styles.spiral}>
                        <View style={styles.loop} />
                        <View style={styles.hole} />
                    </View>
                    <View style={styles.spiral}>
                        <View style={styles.loop} />
                        <View style={styles.hole} />
                    </View>
                    <View style={styles.spiral}>
                        <View style={styles.loop} />
                        <View style={styles.hole} />
                    </View>
                    <View style={styles.spiral}>
                        <View style={styles.loop} />
                        <View style={styles.hole} />
                    </View>
                    <View style={styles.spiral}>
                        <View style={styles.loop} />
                        <View style={styles.hole} />
                    </View>
                </View>
                <View style={styles.notesContainer}>{props.children}</View>
            </TouchableOpacity>
        </Modal>
    )
};

const styles = StyleSheet.create({
    notesContainer: {
        backgroundColor: '#ebb482',
        height: 400,
        width: 335,
        marginVertical: '40%',
        justifyContent: "center",
        alignItems: "center",
        marginLeft: '4%',
        elevation: 5,
        borderColor: '#c46e1f',
        borderWidth: 12
    },
    spiralContainer: {
        marginTop: '30%',
        marginLeft: '2%',
        flexDirection: 'row',
        position: 'absolute',
        elevation: 10
    },
    spiral: {
        marginLeft: '10%'
    },
    loop: {
        position: 'absolute',
        width: 10,
        height: 65,
        marginTop: 10,
        marginLeft: '20%',
        backgroundColor: 'black',
        borderRadius: 15,
        borderColor: '#4a4a4a',
        borderWidth: 3,
        elevation: 15
    },
    hole: {
        width: 20,
        height: 20,
        backgroundColor: 'black',
        borderRadius: 50,
        marginTop: 60,
    }
});

export default Notepad;