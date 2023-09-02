import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CoinDataDetail } from "../../types";
import { font_color, highlight_color_rgb, primary_color, secondary_color } from "../../constants/colors";
import { roboto_regular } from "../../constants/fonts";

const MoreAboutCoin:React.FC <CoinDataDetail> = ({
    description,    
    all_time_high_price,
    ath_change_percentage,
    all_time_low_price,
    atl_change_percentage,
    market_cap,
    total_volume,
    fully_diluted_valuation,
}) => {

    return(
        <View style={styles.container}>
            <ScrollView  style={styles.scrollView}>
                <View style={styles.slimContainer}>
                    <Text
                        style={styles.slimTitle}
                    >Market capitalization</Text>
                    <Text
                        style={styles.slimData}
                    >{market_cap} U$d</Text>
                </View>
                <View style={styles.slimContainer}>
                    <Text
                        style={styles.slimTitle}
                    >Diluted Valuation</Text>
                    <Text
                        style={styles.slimData}
                    >{fully_diluted_valuation} U$d</Text>
                </View>
                <View style={styles.slimContainer}>
                    <Text
                        style={styles.slimTitle}
                    >Total volume</Text>
                    <Text
                        style={styles.slimData}
                    >{total_volume} U$d</Text>
                </View>
                <View style={styles.slimContainer}>
                    <Text
                        style={styles.slimTitle}
                    >All time high price</Text>
                    <Text
                        style={styles.slimData}
                    >{all_time_high_price} U$d</Text>
                </View>
                <View style={styles.slimContainer}>
                    <Text
                        style={styles.slimTitle}
                    >ATH change percentage</Text>
                    <Text
                        style={styles.slimData}
                    >{ath_change_percentage?.toFixed(2)} %</Text>
                </View>
                <View style={styles.slimContainer}>
                    <Text
                        style={styles.slimTitle}
                    >All time low price</Text>
                    <Text
                        style={styles.slimData}
                    >{all_time_low_price} U$d</Text>
                </View>
                <View style={styles.slimContainer}>
                    <Text
                        style={styles.slimTitle}
                    >ATL change percentage</Text>
                    <Text
                        style={styles.slimData}
                    >{atl_change_percentage?.toFixed(2)} %</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text
                        style={styles.descriptionTitle}
                    >Description</Text>
                    <Text
                        style={styles.descriptionText}
                    >{description}</Text>
                </View> 
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{   
        height:'50%',      
        display:'flex',
        flexDirection:'column',
        borderRadius:12,  
        backgroundColor:secondary_color,
        marginTop:3,
        padding:5,      
      
    },
    scrollView:{
        flex:1,        
    },
    slimContainer: {
        width: '100%',
        height:40,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: primary_color,
        borderRadius: 12,
        borderColor:`rgba(${highlight_color_rgb},0.3)`,
        borderWidth:0.5,    
        marginVertical:5,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20
      }
      ,
    slimTitle:{
        fontFamily:roboto_regular,
        color:font_color,
        fontSize:13,
        opacity:0.5,
        textAlign:'left'
    },
    slimData:{
        fontFamily:roboto_regular,
        color:font_color,
        fontSize:16,
        opacity:0.5,
        textAlign:'right'
    },
    descriptionContainer:{
        minHeight: 80,
        backgroundColor: primary_color,
        borderRadius: 12,
        marginVertical:5,
        padding:5,
        borderWidth:0.5,
        borderColor:`rgba(${highlight_color_rgb},0.3)`,
    },
    descriptionTitle:{
        fontFamily:roboto_regular,
        color:font_color,
        fontSize:13,
        opacity:0.8,
        textAlign:'left'
    },
    descriptionText:{
        fontFamily:roboto_regular,
        color:font_color,
        fontSize:11,
        opacity:0.5,
        textAlign:'justify'
    }
})

export default MoreAboutCoin