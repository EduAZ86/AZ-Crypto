import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { NativeStackScreenProps} from '@react-navigation/native-stack'
import { HistoryPriceCoin, RootStackParams } from '../../types'
import PriceCard from '../../components/PriceCard/PriceCard'
import { useNavigation } from '@react-navigation/native'
import CustomHeaderDetail from '../../components/CustomHeaderDetail/CustomHeaderDetail'
import Graph from '../../components/Graph/Graph'
import { DAYS } from '../../constants/days'
import { getDetailCoin, getHistoryCoin } from '../../utils/fetching/fetching'
import MoreAboutCoin from '../../components/MoreAboutCoin/MoreAboutCoin'
import PriceChangeCard from '../../components/PriceChangeCard/PriceChangeCard'

import { commonStyles } from './styles'
import { ThemeContext } from '../../themes/ThemeContext'

const Detail = () => {
    
    const {currentTheme} = React.useContext(ThemeContext)
    const styles = commonStyles(currentTheme)
    
    const { params: data_Coin } = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>()
   
    const [dataCoin, setDataCoin] = useState(data_Coin)

    useEffect(() => {
        const getDataCoin = async () => {
            try {
                const data = await getDetailCoin(data_Coin.id)
                if (data) {
                    setDataCoin(data)
                }
                console.log(data)
            } catch (error) {
                setDataCoin(data_Coin)
            }

        }    
       getDataCoin()
        
        
        const intervalId = setInterval(getDataCoin, 30000)    
        return () => {
            setDataCoin(data_Coin)
            clearInterval(intervalId)
        }
    }, [])  
    

    const navigation = useNavigation()
    
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <CustomHeaderDetail
                    id={data_Coin.id}
                    symbol={data_Coin.symbol}
                    name={data_Coin.name}
                    image={data_Coin.image}
                />
            ),
        })
    }, [navigation, data_Coin.symbol, data_Coin.name, data_Coin.image])   
    const labels = ['']

  

    const [pressButton, setPressButton] = useState<number>(0)
    
    const [priceHistoryCoin, setPriceHistoryCoin] = useState<HistoryPriceCoin>([0])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const days: string = DAYS[pressButton]
                const response = await fetchDataHistoryCoin(days)
                response && setPriceHistoryCoin(response)
            } catch (error) {
                console.error(error)
            }
        }    
        fetchData()
        return () => {
            setPriceHistoryCoin([])
          }
    }, [pressButton])

    

    const fetchDataHistoryCoin = async (days:string) => {
        const resp = await getHistoryCoin(days,data_Coin.id)
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
                id={dataCoin.id}
                current_price={dataCoin.current_price}                
            />
            <PriceChangeCard
                id={dataCoin.id}
                price_change_percentage_24h={dataCoin.price_change_percentage_24h}
                price_change_percentage_7d={dataCoin.price_change_percentage_7d}
                price_change_percentage_30d={dataCoin.price_change_percentage_30d}
                price_change_percentage_60d={dataCoin.price_change_percentage_60d}
                price_change_percentage_1y={dataCoin.price_change_percentage_1y}
            />  
            <Graph
                key={dataCoin.id}
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
                    id={dataCoin.id}
                    description={dataCoin.description} 
                    current_price={dataCoin.current_price}
                    all_time_high_price={dataCoin.all_time_high_price}
                    ath_change_percentage={dataCoin.ath_change_percentage}
                    all_time_low_price={dataCoin.all_time_low_price}
                    atl_change_percentage={dataCoin.atl_change_percentage}
                    market_cap={dataCoin.market_cap}
                    total_volume={dataCoin.total_volume}
                    fully_diluted_valuation={ dataCoin.fully_diluted_valuation}
            />
        </View>
    )
}

export default Detail

// id,
// name,
// symbol,
// image,
// description,
// public_notice,
// current_price,
// all_time_high_price,
// ath_change_percentage,
// all_time_low_price,
// atl_change_percentage,
// market_cap,
// total_volume,
// fully_diluted_valuation,
// high_24h,
// low_24h,   
// price_change_percentage_24h,
// price_change_percentage_7d,
// price_change_percentage_30d,
// price_change_percentage_60d,
// price_change_percentage_1y,
// market_cap_change_percentage_24h,