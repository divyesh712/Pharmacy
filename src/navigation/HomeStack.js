import React from 'react';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home/Home';
import Stores from '../screen/Stores/Stores';
import Medications from '../screen/Medications/Medications';
import Viewmedication from '../screen/Viewmedication/Viewmedication';
import Medicine from '../screen/Medicine/Medicine';
import AllCategories from '../screen/AllCategories/AllCategories';
import Checkout from '../screen/Checkout/Checkout';
import Suppliments from '../screen/Suppliments/Suppliments';
import Product from '../screen/Product/Product';
import FindGeneric from '../screen/FindGeneric/FindGeneric';

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
                <Stack.Screen name="AllCategories" component={AllCategories} />
                <Stack.Screen name="Checkout" component={Checkout} />
                <Stack.Screen name="Suppliments" component={Suppliments} />
                <Stack.Screen name="Product" component={Product} />
                <Stack.Screen name="FindGeneric" component={FindGeneric} />
            </Stack.Navigator>
    )
}

export default HomeStack;