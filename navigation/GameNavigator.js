import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from '../screens/Start';
import LevelSelect from '../screens/LevelSelect';
import Game from '../screens/Game';


const GameStackNavigator = createStackNavigator();

export default GameNavigator = () => {
    return (
        <NavigationContainer>
            <GameStackNavigator.Navigator screenOptions={{headerShown: false}}>
                <GameStackNavigator.Screen
                    name="Start"
                    component={Start}
                />
                <GameStackNavigator.Screen
                    name="LevelSelect"
                    component={LevelSelect}
                />
                <GameStackNavigator.Screen
                    name="Game"
                    component={Game}
                />
            </GameStackNavigator.Navigator>
        </NavigationContainer>
    )
}