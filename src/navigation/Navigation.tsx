import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/HomeScreen';
import { Details } from '../screens/DetailsScreen';
import { Movie } from '../interfaces/movieDB';

export type RootStackParams = {
    home: undefined;
    details: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,//oculta el header del tituklo del menu
                cardStyle: {
                    //backgroundColor: 'white'//findo completo de la vista(card)
                }
            }}
        >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="details"  component={Details} />
        </Stack.Navigator>
    );
}