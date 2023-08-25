import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Chapter1 from './Pages/Chapter1'
import Chapter2 from './Pages/Chapter2'
import Chapter3 from './Pages/Chapter3'



const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Chapter1" component={Chapter1} />
                <Stack.Screen name="Chapter2" component={Chapter2} />
                <Stack.Screen name="Chapter3" component={Chapter3} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

