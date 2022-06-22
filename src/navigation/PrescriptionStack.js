import React from 'react';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import Prescriptions from '../screen/Prescriptions/Prescriptions';
import ViewPrescription from '../screen/ViewPrescription/ViewPrescription';

const Stack = createStackNavigator();

const PrescriptionStack = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                presentation={"modal"}
                initialRouteName="Prescriptions"
            >
                <Stack.Screen name="Prescriptions" component={Prescriptions} />
                <Stack.Screen name="ViewPrescription" component={ViewPrescription} />
            </Stack.Navigator>
    )
}

export default PrescriptionStack;