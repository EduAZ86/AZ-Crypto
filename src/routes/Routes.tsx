import React from 'react'

import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../views/Home/Home'
import Detail from '../views/Detail/Detail'
import { RootStackParams } from '../types'
import CustomHeaderDetail from '../components/CustomHeaderDetail/CustomHeaderDetail'
import CustomHeaderHome from '../components/CustomHederHome/CustomHeaderHome'
import { ThemeContext } from '../themes/ThemeContext'



const Stack = createNativeStackNavigator<RootStackParams> ()

const Routes = () => {

    const {currentTheme} = React.useContext(ThemeContext)
   
    
    const routesScreenDefaultOptions = {
        headerStyle:{
            backgroundColor: currentTheme.primary_color,
        },
        headerTitleStyle: {
            color:currentTheme.highlight_color,
            fontSize:16,
        
        },
        headerTintColor: currentTheme.highlight_color
    }    
    // const headerLeftCustom = {
    //     backgroundColor:currentTheme.font_color
    // }
    return(   
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name='Home' component={Home} options={{
                        ...routesScreenDefaultOptions, headerTitle: () => 
                            <CustomHeaderHome/>
                        }}/>
                    <Stack.Screen name='Detail' component={Detail}          
                        options={{
                            ...routesScreenDefaultOptions,
                            headerTitle: () => 
                            <CustomHeaderDetail
                                id='Detail'
                            />                        
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default Routes