import React, {useContext} from "react";
import { Dimensions, Image, Switch, Text, View } from "react-native";

import { commonStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";



const CustomHeaderHome:React.FC = () => {
    const name = 'crypto'
    const {currentTheme , theme, toggleTheme } = useContext(ThemeContext)
    const widthContainer = Dimensions.get("window").width - 33
    const styles = commonStyles(currentTheme,widthContainer)


    return(
        <View
        style={styles.container}
    >   
        <View style={styles.switchContainer}>
            <Switch
                trackColor={{ false: currentTheme.highlight_color, true: currentTheme.secondary_color }}
                thumbColor={theme==='light' ? currentTheme.highlight_color : currentTheme.secondary_color}
                ios_backgroundColor={currentTheme.primary_color}
                onValueChange={toggleTheme}
                value={theme==='light'}
            />
        </View>
        <View style={styles.logoContainer}>
            <Image
                style={styles.image} 
                source={require('../../assets/AZ-logo.png')}/>
            <Text
                style={styles.name}
            >{name}</Text>
        </View>
    </View>
    )
}


export default CustomHeaderHome