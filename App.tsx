import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
    return(
        <NavigationContainer>
            <Text>Something</Text>
            <Icon
                name='md-home'
                size={24}
                color='#900'
            />
        </NavigationContainer>
    )
}

export default App