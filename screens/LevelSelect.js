import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Tabs from 'react-native-tabs';

import details from '../puzzles/details/details';
import notes from '../puzzles/notes/notes';
import solutions from '../puzzles/solutions/solutions';
import { selectLevel } from '../store/actions/game';


const LevelSelect = (props) => {

    const dispatch = useDispatch();

    const [diff, setDiff] = useState('beginner');

    const selectedBackground = (input) => {
        let color;

        switch (input) {
            case 'beginner':
                color = '#cdf066'
                break;
            case 'intermediate':
                color = '#f9dc68'
                break;
            case 'advanced':
                color = '#a5dcf8'
                break;
            case 'expert':
                color = '#ff6666'
                break;
            default:
                break;
        }

        return {
            ...styles.container,
            backgroundColor: color
        };


    };

    const selectedTab = (input) => {
        let color = 'white';

        if (input === diff) {
            switch (input) {
                case 'beginner':
                    color = '#ace600'
                    break;
                case 'intermediate':
                    color = '#f6c604'
                    break;
                case 'advanced':
                    color = '#0e89c6'
                    break;
                case 'expert':
                    color = '#ff0000'
                    break;
                default:
                    break;
            }
        }

        return {
            ...styles.tab,
            backgroundColor: color
        };
    }

    const selectedTabText = (input) => {
        return input === diff ? 'white' : 'black'
    }

    const buttonStyle = (input) => {
        let color;

        switch (input) {
            case 'beginner':
                color = '#ace600'
                break;
            case 'intermediate':
                color = '#f6c604'
                break;
            case 'advanced':
                color = '#0e89c6'
                break;
            case 'expert':
                color = '#ff0000'
                break;
            default:
                break;
        }

        return {
            ...styles.button,
            backgroundColor: color
        };
    }

    const buttonNumbers = (input) => {
        switch (input) {
            case 'beginner':
                return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            case 'intermediate':
                return [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
            case 'advanced':
                return [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
            case 'expert':
                return [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
            default:
                break;
        }
    }

    const levelSelect = (levelNum) => {
        dispatch(selectLevel(details[levelNum], notes[levelNum], solutions[levelNum]));
        props.navigation.navigate('Game')
    }

    return (
        <View style={selectedBackground(diff)}>
            <Tabs selected={diff} style={{ backgroundColor: 'white' }} onSelect={dl => setDiff(dl.props.diff)}>
                <View diff="beginner" style={selectedTab('beginner')}>
                    <Text style={{ color: selectedTabText('beginner') }}>Beginner</Text>
                </View>
                <View diff="intermediate" style={selectedTab('intermediate')}>
                    <Text style={{ color: selectedTabText('intermediate') }}>Intermediate</Text>
                </View>
                <View diff="advanced" style={selectedTab('advanced')}>
                    <Text style={{ color: selectedTabText('advanced') }}>Advanced</Text>
                </View>
                <View diff="expert" style={selectedTab('expert')}>
                    <Text style={{ color: selectedTabText('expert') }}>Expert</Text>
                </View>
            </Tabs>
            <View style={styles.buttonContainer}>
                {buttonNumbers(diff).map(number => (
                    <TouchableOpacity key={number} onPress={() => levelSelect(number)}>
                        <View style={buttonStyle(diff)}>
                            <Text style={styles.buttonText}>
                                {number}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {
        color: 'white'
    },
    tab: {
        width: 90,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: 320,
        height: 500,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    button: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'white',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 30
    }
})

export default LevelSelect;