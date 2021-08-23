import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Polygon, Rect } from 'react-native-svg';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tray}>
        <View style={styles.trayContainer}>
          <View style={styles.trayRow}>
            <View style={styles.trayCup}></View>
            <View style={styles.trayCup}></View>
            <View style={styles.trayCup}></View>
          </View>
          <View style={styles.trayRow}>
            <View style={styles.trayCup}></View>
            <View style={styles.trayCup}></View>
            <View style={styles.trayCup}></View>
          </View>
          <View style={styles.trayRow}>
            <View style={styles.trayCup}></View>
            <View style={styles.trayCup}></View>
            <View style={styles.trayCup}></View>
          </View>
        </View>
      </View>
      <View style={styles.paper}>
        <View style={styles.paperContainer}>
          <View style={styles.paperRow}>
            <View>
              <Svg height="100" width="100">
                <Polygon
                  points="50,5 95,50 50,95 5,50"
                  fill="#3e2a14"
                  stroke="#f5f5dc"
                  strokeWidth="3"
                />
                <Polygon
                  points="50,5 95,50 50,95 5,50"
                  fill="#3e2a14"
                  stroke="#f5f5dc"
                  strokeWidth="3"
                  transform="rotate(30, 50, 50)"
                />
                <Polygon
                  points="50,5 95,50 50,95 5,50"
                  fill="#3e2a14"
                  stroke="#f5f5dc"
                  strokeWidth="3"
                  transform="rotate(60, 50, 50)"
                />
                <Circle cx="50" cy="50" r="37" fill="#3e2a14" />
                <Polygon
                  points="50,15 80,70 20,70"
                  stroke="#644420"
                  strokeWidth="2"
                />
                <Polygon
                  points="50,25 70,65 30,65"
                  stroke="#644420"
                  strokeWidth="2"
                />
                <Polygon
                  points="50,37 60,60 40,60"
                  stroke="#644420"
                  strokeWidth="2"
                />
              </Svg>
            </View>
            <View>
              <Svg height="100" width="100">
                <Polygon
                  points="50,5 95,50 50,95 5,50"
                  fill="#ff8da1"
                  stroke="#f5f5dc"
                  strokeWidth="3"
                />
                <Polygon
                  points="50,5 95,50 50,95 5,50"
                  fill="#ff8da1"
                  stroke="#f5f5dc"
                  strokeWidth="3"
                  transform="rotate(30, 50, 50)"
                />
                <Polygon
                  points="50,5 95,50 50,95 5,50"
                  fill="#ff8da1"
                  stroke="#f5f5dc"
                  strokeWidth="3"
                  transform="rotate(60, 50, 50)"
                />
                <Circle cx="50" cy="50" r="37" fill="#ff8da1" />
                <Circle cx="50" cy="50" r="30" stroke="#ff748c" strokeWidth="2" />
                <Circle cx="50" cy="50" r="25" stroke="#ff748c" strokeWidth="2" />
                <Circle cx="50" cy="50" r="20" stroke="#ff748c" strokeWidth="2" />
              </Svg>
            </View>
            <View>
              <Svg height="100" width="100">
                <Polygon
                  points="50,5 95,50 50,95 5,50"
                  fill="#b67233"
                  stroke="#f5f5dc"
                  strokeWidth="3"
                />
                <Polygon
                  points="50,5 95,50 50,95 5,50"
                  fill="#b67233"
                  stroke="#f5f5dc"
                  strokeWidth="3"
                  transform="rotate(30, 50, 50)"
                />
                <Polygon
                  points="50,5 95,50 50,95 5,50"
                  fill="#b67233"
                  stroke="#f5f5dc"
                  strokeWidth="3"
                  transform="rotate(60, 50, 50)"
                />
                <Circle cx="50" cy="50" r="37" fill="#b67233" />
                <Rect
                  x="28"
                  y="27"
                  width="45"
                  height="45"
                  strokeWidth="2"
                  stroke="#a3662d"
                />
                <Rect
                  x="33"
                  y="32"
                  width="35"
                  height="35"
                  strokeWidth="2"
                  stroke="#a3662d"
                />
                <Rect
                  x="38"
                  y="37"
                  width="25"
                  height="25"
                  strokeWidth="2"
                  stroke="#a3662d"
                />
              </Svg>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tray: {
    height: '50%',
    width: '100%',
    backgroundColor: '#772424'
  },
  trayContainer: {
    marginTop: 30,
    marginLeft: 10
  },
  trayRow: {
    flexDirection: 'row',
    marginTop: 10
  },
  trayCup: {
    width: 95,
    height: 95,
    borderRadius: 50,
    borderColor: '#5F1D1D',
    borderWidth: 5,
    marginLeft: 15,
    backgroundColor: '#471616'
  },
  paper: {
    height: '50%',
    width: '100%',
    backgroundColor: '#d3d3d3'
  },
  paperContainer: {
    marginTop: 30,
    marginLeft: 10
  },
  paperRow: {
    flexDirection: 'row',
    marginTop: 10
  },
});
