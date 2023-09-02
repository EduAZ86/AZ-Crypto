import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { font_color } from "../../constants/colors";
import { CoinDataDetail } from "../../types";
import { roboto_bold, roboto_regular } from "../../constants/fonts";

const CustomHeaderTitle: React.FC <CoinDataDetail> = ({ symbol, name, image }) => {

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

const styles = StyleSheet.create({
    container:{
        flex: 0.80,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:10
    },
    image:{
        width:30,
        height:30,
    },
    symbol:{
        color:font_color,
        fontSize:14,
        opacity:0.5,
        fontFamily: roboto_regular
    },
    name:{
        color:font_color,
        fontSize:22,
        fontFamily: roboto_bold
    }   

})

export default CustomHeaderTitle