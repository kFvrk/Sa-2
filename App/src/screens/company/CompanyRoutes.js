import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterCompany from './RegisterCompany';
import Companies from './Companies';
import RegisterModel from '../model/RegisterModel';
import CompanyModels from '../model/CompanyModels'

const Stack = createNativeStackNavigator();

const CompanyRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="MainCompanies" component={Companies} />
                <Stack.Screen name="RegisterCompany" component={RegisterCompany} />
                <Stack.Screen name="RegisterModel" component={RegisterModel} />
                <Stack.Screen name="CompanyModels" component={CompanyModels} />
            </Stack.Navigator>
    )
}

export default CompanyRoutes;