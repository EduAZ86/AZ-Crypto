import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CoinDataDetail } from "../../types";
import { font_color, highlight_color, highlight_color_rgb, primary_color, secondary_color } from "../../constants/colors";
import { roboto_regular } from "../../constants/fonts";

const PriceChangeCard:React.FC <CoinDataDetail> = ({
    price_change_percentage_24h,
    price_change_percentage_7d,
    price_change_percentage_30d,
    price_change_percentage_60d,
    price_change_percentage_1y,
}) => {
    const data = [
        price_change_percentage_24h,
        price_change_percentage_7d,
        price_change_percentage_30d,
        price_change_percentage_60d,
        price_change_percentage_1y,
    ]
    return(
        <View style={styles.container}>
            
            {data.map((item,index) => {
                let range = ''
                switch (index) {
                    case 0:
                        range = '24 hours'                    
                    break;
                    case 1:
                        range = '7 days'                     
                    break;
                    case 2:
                        range = '1 month'                     
                    break;
                    case 3:
                        range = '2 months'                 
                    break;
                    case 4:
                        range = '1 year'          
                    break;                
                    default:
                        range= '24 hours'
                        break;
                }
                return(
                    <View
                        key={index}
                        style={styles.card}
                        >
                            <Text
                                style={styles.range}
                            >{range}</Text>
                        { item !== undefined && (item > 0
                            ?   <Text
                                    style={[styles.change, styles.green]}
                                >{`⬆ ${item?.toFixed(2)} %`}</Text>
                            :   <Text
                                    style={[styles.change, styles.red]}
                                >{`⬇ ${item?.toFixed(2)} %`}</Text>
                        )}
                    </View>

                )

            })}

            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        display:'flex',
        flexDirection:'row',
        paddingHorizontal:5,
        backgroundColor:secondary_color,
        borderRadius:12,
        marginTop:5,
        alignItems:'center',
        justifyContent:'space-around'
    },
    card:{
        width:75,
        height:40,
        display:'flex',
        flexDirection:'column',
        backgroundColor:`rgba(${highlight_color_rgb},0.3)`,        
        borderColor:primary_color,
        borderWidth:1,
        borderRadius:12,
        justifyContent:'center',
        gap:1
    },
    change:{
        textAlign:'center',
        fontFamily:roboto_regular,
        fontSize:12,
    },
    green:{
        color:'green',
        opacity:1
    },
    red:{
        color:'red',
        opacity:1
    },
    range:{
        textAlign:'center',
        fontFamily:roboto_regular,
        color:font_color,
        fontSize:9,
        opacity:0.8
    },
})

export default PriceChangeCard