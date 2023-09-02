import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { font_color, highlight_color, primary_color } from '../../constants/colors'
import { useRoute } from '@react-navigation/native'
import { NativeStackScreenProps} from '@react-navigation/native-stack'
import { HistoryPriceCoin, RootStackParams } from '../../types'
import PriceCard from '../../components/PriceCard/PriceCard'
import { useNavigation } from '@react-navigation/native'
import CustomHeaderTitle from '../../components/CustomHeaderTitle/CustomHeaderTitle'
import Graph from '../../components/Graph/Graph'
import { DAYS } from '../../constants/days'
import { roboto_bold, roboto_light, roboto_regular } from '../../constants/fonts'
import { getHistoryCoin } from '../../utils/fetching/fetching'
import MoreAboutCoin from '../../components/MoreAboutCoin/MoreAboutCoin'
import PriceChangeCard from '../../components/PriceChangeCard/PriceChangeCard'
const Detail = () => {    
    const { params: {
        id,
        name,
        symbol,
        image,
        description,
        public_notice,
        current_price,
        all_time_high_price,
        ath_change_percentage,
        all_time_low_price,
        atl_change_percentage,
        market_cap,
        total_volume,
        fully_diluted_valuation,
        high_24h,
        low_24h,   
        price_change_percentage_24h,
        price_change_percentage_7d,
        price_change_percentage_30d,
        price_change_percentage_60d,
        price_change_percentage_1y,
        market_cap_change_percentage_24h,
    } } = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>()

    const navigation = useNavigation();
    
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <CustomHeaderTitle
                    id={id}
                    symbol={symbol}
                    name={name}
                    image={image}
                />
            ),
        });
    }, [navigation, symbol, name, image]);   
    const labels = ['']

    const [pressButton, setPressButton] = useState<number>(0)
    
    const [priceHistoryCoin, setPriceHistoryCoin] = useState<HistoryPriceCoin>([0]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const days: string = DAYS[pressButton];
                const response = await fetchDataHistoryCoin(days);
                response && setPriceHistoryCoin(response);
            } catch (error) {
                console.error(error);
            }
        };    
        fetchData();
        return () => {
            setPriceHistoryCoin([])
          }
    }, [pressButton]);

    

    const fetchDataHistoryCoin = async (days:string) => {
        const resp = await getHistoryCoin(days,id)
        return resp
    }

    const handlePress = (index:number) => {
        setPressButton(index)
    }
    
   
    return(        
        <View
            style={styles.container}
        >
            <PriceCard
                id={id}
                name={name}
                symbol={symbol}
                current_price={current_price}
                price_change_percentage_24h={price_change_percentage_24h}
                image={image}                
            />
            <Graph
                key={id}
                data={priceHistoryCoin}
                labels={labels}
            />
            <View style={styles.daysButtonContainer}>
                {DAYS.map((item,index) => {
                    return(
                        <TouchableOpacity
                            key={index}
                            style={[styles.button, pressButton === index && styles.press]}
                            onPress={() => handlePress(index)}
                        >
                            <Text
                                style={styles.textButton}
                            >{item}<Text style={styles.d}>d</Text></Text>
                        </TouchableOpacity>                        
                    )
                })}
            </View>
            <MoreAboutCoin
                    id={id}
                    description={description} 
                    current_price={current_price}
                    all_time_high_price={all_time_high_price}
                    ath_change_percentage={ath_change_percentage}
                    all_time_low_price={all_time_low_price}
                    atl_change_percentage={atl_change_percentage}
                    market_cap={market_cap}
                    total_volume={total_volume}
                    fully_diluted_valuation={ fully_diluted_valuation}
            />
            <PriceChangeCard
                id={id}
                price_change_percentage_24h={price_change_percentage_24h}
                price_change_percentage_7d={price_change_percentage_7d}
                price_change_percentage_30d={price_change_percentage_30d}
                price_change_percentage_60d={price_change_percentage_60d}
                price_change_percentage_1y={price_change_percentage_1y}
            />  
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        backgroundColor:primary_color,
        paddingHorizontal:5
    },
    daysButtonContainer:{
        paddingHorizontal:10,
        width:'100%',
        height:45,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    button:{
        width:45,
        backgroundColor:'transparent',
        alignItems:'center',      
        justifyContent:'center',
        marginVertical:8,
        borderRadius:8,
        borderWidth:1,
        borderColor:highlight_color
    },
    press:{
        backgroundColor:highlight_color,
        opacity:0.8,
    },    
    textButton:{
        textAlign:'center',
        fontFamily:roboto_bold,
        color:font_color,
        fontSize:12
    },
    d:{
        textAlign:'center',
        fontFamily:roboto_light,
        color:font_color,
        fontSize:10,
        opacity:0.5
    }
})

export default Detail