import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterCompany from './RegisterCompany';
import Companies from './Companies';

const Stack = createNativeStackNavigator();

const CompanyRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="MainCompanies" component={Companies} />
                <Stack.Screen name="RegisterCompany" component={RegisterCompany} />
            </Stack.Navigator>
    )
}

export default CompanyRoutes;