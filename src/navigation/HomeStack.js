import React from 'react';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home/Home';
import Stores from '../screen/Stores/Stores';
import Medications from '../screen/Medications/Medications';
import Viewmedication from '../screen/Viewmedication/Viewmedication';
import Medicine from '../screen/Medicine/Medicine';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                presentation={"modal"}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Stores" component={Stores} />
                <Stack.Screen name="Medications" component={Medications} />
                <Stack.Screen name="Viewmedication" component={Viewmedication} />
                <Stack.Screen name="Medicine" component={Medicine} />
            </Stack.Navigator>
    )
}

export default HomeStack;