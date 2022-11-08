import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import ContactUS from '../pages/ContactUs';
import ABTesting from '../pages/ABTesting';
import { ABTestingTypes } from '../client/ABTestingDataClient/types';

export type RootStackParamList = {
    Home: undefined;
    ContactUS: undefined;
    ABTesting: { type: ABTestingTypes };
};

const Navigation = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <View style={{ flex: 1, width: '100%' }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="ContactUS" component={ContactUS} />
                    <Stack.Screen name="ABTesting" component={ABTesting} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

export default Navigation;
