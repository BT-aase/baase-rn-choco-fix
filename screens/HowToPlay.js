import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import PageOne from '../components/HowToPlay/PageOne';
import PageTwo from '../components/HowToPlay/PageTwo';

const HowToPlay = (props) => {

    const [page, setPage] = useState(1);

    const showPage = () => {
        switch(page) {
            case 1:
                return <PageOne />
            case 2: 
                return <PageTwo />
            default:
                break;
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                {showPage()}
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => setPage(page - 1)}>
                    <Icon name="arrow-back-circle" size={60} color='#3e2a14' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPage(page + 1)}>
                    <Icon name="arrow-forward-circle" size={60} color='#3e2a14' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3d8b5',
    },
    background: {
        height: '83%',
        width: '85%',
        marginLeft: '7.5%',
        marginTop: '15%',
        backgroundColor: '#ebb482',
    },
    buttons: {
        flexDirection: 'row',
        width: '85%',
        marginLeft: '7.5%',
        justifyContent: 'space-between'
    }
})

export default HowToPlay;