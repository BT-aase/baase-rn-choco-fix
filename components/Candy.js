import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Circle, Polygon, Rect } from 'react-native-svg';

const Candy = (props) => {

    const flavor = props.id.split('-')[0];
    const shape = props.id.split('-')[1];

    let fill = '';
    let stroke = '';

    const colors = (flavor) => {
        switch (flavor) {
            case 'caramel':
                fill = '#b67233';
                stroke = '#a3662d';
                break;
            case 'chocolate':
                fill = '#3e2a14';
                stroke = '#644420';
                break;
            case 'strawberry':
                fill = '#ff8da1';
                stroke = '#ff748c';
                break;
            default:
                break;
        }
    }

    const design = (shape) => {
        switch (shape) {
            case 'circle':
                return (
                    <>
                        <Circle cx="50" cy="50" r="30" stroke={stroke} strokeWidth="2" />
                        <Circle cx="50" cy="50" r="25" stroke={stroke} strokeWidth="2" />
                        <Circle cx="50" cy="50" r="20" stroke={stroke} strokeWidth="2" />
                    </>
                )
            case 'square':
                return (
                    <>
                        <Rect
                            x="25"
                            y="25"
                            width="50"
                            height="50"
                            strokeWidth="2"
                            stroke={stroke}
                            rx={5}
                        />
                        <Rect
                            x="30"
                            y="30"
                            width="40"
                            height="40"
                            strokeWidth="2"
                            stroke={stroke}
                            rx={5}
                        />
                        <Rect
                            x="35"
                            y="35"
                            width="30"
                            height="30"
                            strokeWidth="2"
                            stroke={stroke}
                            rx={5}
                        />
                    </>
                )
            case 'triangle':
                return (
                    <>
                        <Polygon
                            points="50,15 80,70 20,70"
                            stroke={stroke}
                            strokeWidth="2"
                        />
                        <Polygon
                            points="50,25 70,65 30,65"
                            stroke={stroke}
                            strokeWidth="2"
                        />
                        <Polygon
                            points="50,37 60,60 40,60"
                            stroke={stroke}
                            strokeWidth="2"
                        />
                    </>
                )
            default:
                break;
        }
    }

    const candyStyle = () =>  {
        if (props.showBorder){
            return styles.candyBorder
        } else {
            return styles.candyContainer
        }
    }
    
    colors(flavor);

    let disabled = typeof(props.onPress) === 'undefined' ? true : false;

    return (
        <TouchableOpacity onPress={props.onPress} disabled={disabled}>
            <View style={candyStyle()}>
                <Svg height="100" width="100">
                    <Polygon
                        points="50,5 95,50 50,95 5,50"
                        fill={fill}
                        stroke="#f5f5dc"
                        strokeWidth="3"
                    />
                    <Polygon
                        points="50,5 95,50 50,95 5,50"
                        fill={fill}
                        stroke="#f5f5dc"
                        strokeWidth="3"
                        transform="rotate(30, 50, 50)"
                    />
                    <Polygon
                        points="50,5 95,50 50,95 5,50"
                        fill={fill}
                        stroke="#f5f5dc"
                        strokeWidth="3"
                        transform="rotate(60, 50, 50)"
                    />
                    <Circle cx="50" cy="50" r="37" fill={fill} />
                    {design(shape)}
                </Svg>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    candyContainer: {
        marginHorizontal: 6
    }, 
    candyBorder: {
        marginHorizontal: 3,
        borderColor: 'white',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 10
    }
})

export default Candy;