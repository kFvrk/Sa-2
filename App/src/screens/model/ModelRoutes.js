import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterModel from './RegisterModel';
import Models from './Models';

const Stack = createNativeStackNavigator();

const ModelRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="ModelsMain" component={Models} />
            </Stack.Navigator>
    )
};

export default ModelRoutes;