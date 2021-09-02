import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';

const Buttons = (props) => {

    const trayCandy = useSelector((state) => state.game.trayCandy);
    const solutionCandy = useSelector((state) => state.game.solutionCandy);

    const checkDisabled = () => {
        let trayRow;
        let rowsStatus = [false, false, false];
        for (let i = 0; i < 3; i++) {
            trayRow = trayCandy[i];
            if (trayRow.indexOf('') === -1) {
                rowsStatus[i] = true;
            };
        }

        if (rowsStatus.indexOf(false) === -1) {
            return false;
        } else {
            return true;
        }
    };

    const checkSolved = () => {
        if (JSON.stringify(trayCandy) === JSON.stringify(solutionCandy)) {
            console.log('solved');
        }
    };

    let disabled = checkDisabled();

    return (
        <View style={styles.buttons}>
            <View style={styles.buttonContainer}>
                <View>
                    <TouchableOpacity onPress={props.openMenu}>
                        <View style={styles.menu}>
                            <Text style={styles.buttonText}>Menu</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={props.openNotes}>
                        <View style={styles.order}>
                            <Text style={styles.buttonText}>- Notes -</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => checkSolved()} disabled={disabled}>
                        <View style={disabled ? [styles.check, styles.menuDisabled] : styles.check}>
                            <Icon name="checkmark-circle-outline" size={28} color={disabled ? 'gray' : 'white'} />
                        </View>
                    </TouchableOpacity>
                </View>
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
    menuDisabled: {
        backgroundColor: '#d3d3d3'
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