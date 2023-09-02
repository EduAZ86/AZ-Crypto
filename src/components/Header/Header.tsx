import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { font_color, highlight_color, primary_color, secondary_color } from "../../constants/colors";
import { roboto_bold, roboto_regular } from "../../constants/fonts";


const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.brandContainer}>
                <Image 
                    style={styles.logo}
                    source={require('../../assets/blockchain.png')}/>
                <Text
                    style={styles.title}
                >Az Crypto</Text>
            </View>
            <TextInput
                style={styles.search}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:80,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: primary_color,
        paddingHorizontal:15,    
      
    },
    brandContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        fontSize:25,
        color:highlight_color,
        fontFamily:roboto_bold

    },
    logo:{
        width:60,
        height:60,
    },
    search:{
        backgroundColor:secondary_color,
        height:35,
        width:'45%',
        borderRadius:12,
        paddingHorizontal:12,
        fontSize:16,
        color:font_color,
        borderColor: highlight_color,
        borderWidth:1
    }
})

export default Header