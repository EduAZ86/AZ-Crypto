import React, {useContext} from "react";
import { Image, Text, View } from "react-native";

import { CoinDataDetail } from "../../types";
import { commonStyles } from "./styles";
import { ThemeContext } from "../../themes/ThemeContext";


const CustomHeaderDetail: React.FC <CoinDataDetail> = ({ symbol, name, image }) => {
    const {currentTheme} = useContext(ThemeContext)
    const styles = commonStyles(currentTheme)

    return(
        <View
        style={styles.container}
    >
        <Image
            style={styles.image} 
            source={{uri:image}}/>
        <Text
            style={styles.name}
        >{name}</Text>
        <Text
            style={styles.symbol}
        >{symbol?.toLocaleUpperCase()}</Text>
    </View>
    )
}


export default CustomHeaderDetail