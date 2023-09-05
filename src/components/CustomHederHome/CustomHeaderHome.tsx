import React, {useContext} from "react";
import { Dimensions, Image, Text, View } from "react-native";

import { commonStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";



const CustomHeaderHome:React.FC = () => {
    const name = 'AZcripto'
    const {currentTheme} = useContext(ThemeContext)
    const widthContainer = Dimensions.get("window").width - 33
    const styles = commonStyles(currentTheme,widthContainer)


    return(
        <View
        style={styles.container}
    >
        <Image
            style={styles.image} 
            source={require('../../assets/blockchain.png')}/>
        <Text
            style={styles.name}
        >{name}</Text>
    </View>
    )
}


export default CustomHeaderHome