import React, {FC} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CoinDataDetail, CoinDataShort, RootStackParams } from '../../types'
import { font_color, highlight_color } from '../../constants/colors'
import { getDetailCoin } from '../../utils/fetching/fetching'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { roboto_bold, roboto_light, roboto_regular } from '../../constants/fonts'

type SlimCoinCardNavigationProps = NativeStackNavigationProp<RootStackParams,'Detail'>

const SlimCoinCard: FC<CoinDataShort> = ({
    id,
    current_price,
    image,
    name,
    price_change_percentage_24h,
    symbol,
    market_cap_rank
    }) => {
    
    const {navigate} = useNavigation<SlimCoinCardNavigationProps>()

    const handlePress = async () => {  
        const dataCoin = await getDetailCoin(id)           
        navigate('Detail', dataCoin!)
    }

    return(
        <TouchableOpacity
            style={styles.container}
            onPress={() => handlePress()}
        >
                <Text
                    style={styles.rank}
                >{market_cap_rank}</Text>
                <Image 
                    style={styles.image}
                    source={{uri:image}}/>
            <View
                style={styles.nameContainer}   
            >
                <Text
                    style={styles.symbol}
                >{symbol?.toUpperCase()}</Text>
                <Text
                    style={styles.name}
                >{name}</Text>
            </View>
            <View
                style={styles.priceContainer}
            >
                <Text
                    style={styles.price}
                >{`${current_price?.toFixed(2)} U$D`}</Text>
                { price_change_percentage_24h !== undefined && (price_change_percentage_24h > 0
                    ?   <Text
                            style={[styles.change, styles.green]}
                        >{`${price_change_percentage_24h?.toFixed(2)}%`}</Text>
                    :   <Text
                    style={[styles.change, styles.red]}
                        >{`${price_change_percentage_24h?.toFixed(2)}%`}</Text>
                )}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height:50,
        width:'100%',
        paddingHorizontal:10,
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#393E46',
        marginVertical:1,
        alignItems:'center',       
    },
    rank:{
        color:font_color,
        width:'7%',
        fontFamily:roboto_light
    },
    image:{
        width:30,
        height:30,
        marginHorizontal:10
    },
    nameContainer:{
        display:'flex',
        flexDirection:'column',
        width:'25%'
    },
    name:{
        color:font_color,
        fontSize:10,
        opacity:0.7,
        fontFamily:roboto_light
    },
    symbol:{
        color:font_color,
        fontSize:20,
        fontFamily:roboto_bold
    },
    priceContainer:{
        flex:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    price:{
        width:'55%',
        textAlign:'right',
        color:font_color,
        fontSize:18,    
        fontFamily:roboto_regular

    },
    change:{   
        width:'25%',
        textAlign:'right',
        fontSize:16,
        fontFamily:roboto_regular
    },
    green:{
        color:'green'
    },
    red:{
        color:'red'
    },

})

export default SlimCoinCard