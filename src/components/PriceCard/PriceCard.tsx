import React, {FC} from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { CoinDataDetail } from "../../types";
import { font_color, secondary_color } from "../../constants/colors";
import { roboto_bold, roboto_light, roboto_regular } from "../../constants/fonts";
import { Dimensions } from "react-native";



const PriceCard:FC<CoinDataDetail> = ({symbol, name ,current_price, price_change_percentage_24h,image}) => {


    return(
        <View
            style={styles.container}        >

            <View
                style={styles.priceContainer}
            >
                <Text
                    style={styles.price}
                >{`${current_price} U$d`}</Text>
                { price_change_percentage_24h !== undefined && (price_change_percentage_24h > 0
                    ?   <Text
                            style={[styles.change, styles.green]}
                        >{`⬆ ${price_change_percentage_24h?.toFixed(2)} %`}</Text>
                    :   <Text
                    style={[styles.change, styles.red]}
                        >{`⬇ ${price_change_percentage_24h?.toFixed(2)} %`}</Text>
                )}
                <Text
                    style={styles.period}
                >24h</Text>     
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:70,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        borderColor:secondary_color,
        borderWidth:1,
        borderRadius:12,
        padding:5,
       
    },   
    priceContainer:{      
        width:'95%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',        
        justifyContent:'space-around'
    },
    price:{
        color:font_color,
        fontSize:40,
        fontFamily:roboto_bold
    },
    change:{
        color:font_color,
        fontSize:20,
        fontFamily:roboto_regular
    },
    green:{
        color:'green'
    },
    red:{
        color:'red'
    },
    period:{
        color:font_color,
        fontSize:10,
        opacity:0.5,
        fontFamily:roboto_regular
    }

})

export default PriceCard 