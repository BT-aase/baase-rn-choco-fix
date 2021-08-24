import React from 'react';
import Svg, { Circle, Polygon, Rect } from 'react-native-svg';

const Candy = (props) => {

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
                            x="28"
                            y="27"
                            width="45"
                            height="45"
                            strokeWidth="2"
                            stroke={stroke}
                        />
                        <Rect
                            x="33"
                            y="32"
                            width="35"
                            height="35"
                            strokeWidth="2"
                            stroke={stroke}
                        />
                        <Rect
                            x="38"
                            y="37"
                            width="25"
                            height="25"
                            strokeWidth="2"
                            stroke={stroke}
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

    colors(props.flavor);

    return (
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
            {design(props.shape)}
        </Svg>
    )
};

export default Candy;