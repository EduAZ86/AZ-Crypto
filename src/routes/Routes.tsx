import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { font_color, highlight_color, primary_color } from '../constants/colors'
import Home from '../views/Home/Home'
import Detail from '../views/Detail/Detail'
import { RootStackParams } from '../types'
import CustomHeaderTitle from '../components/CustomHeaderTitle/CustomHeaderTitle'

const Stack = createNativeStackNavigator<RootStackParams> ()

const routesScreenDefaultOptions = {
    headerStyle:{
        backgroundColor: primary_color,
    },
    headerTitleStyle: {
        color:highlight_color,
        fontSize:16,
    
    },
    headerTintColor: highlight_color
}

const headerLeftCustom = {
    backgroundColor:font_color
}

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={routesScreenDefaultOptions}/>
                <Stack.Screen name='Detail' component={Detail}          
                    options={{
                        ...routesScreenDefaultOptions,
                        headerTitle: () => 
                        <CustomHeaderTitle
                            id='Detail'
                        />                        
                    }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Routes