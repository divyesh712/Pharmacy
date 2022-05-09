import React from 'react';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import Orders from '../screen/Orders/Orders';
import OrderProgress from '../screen/OrderProgress/OrderProgress';

const Stack = createStackNavigator();

const OrderStack = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                presentation={"modal"}
                initialRouteName="Orders"
            >
                <Stack.Screen name="Orders" component={Orders} />
                <Stack.Screen name="OrderProgress" component={OrderProgress} />
            </Stack.Navigator>
    )
}

export default OrderStack;