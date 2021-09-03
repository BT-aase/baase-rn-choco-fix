import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Game from '../screens/Game';
import Start from '../screens/Start';

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
                    name="Game"
                    component={Game}
                />
            </GameStackNavigator.Navigator>
        </NavigationContainer>
    )
}