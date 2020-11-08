// HAPPY

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Page_1 from './Page_1';
import Page_2 from './Page_2';
import Page_3 from './Page_3';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Exercise_1() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Page_1" component={Page_1} />
            <Stack.Screen name="Page_2" component={Page_2} />
            <Stack.Screen name="Page_3" component={Page_3} />
        </Stack.Navigator>
    )
}

export default Exercise_1;