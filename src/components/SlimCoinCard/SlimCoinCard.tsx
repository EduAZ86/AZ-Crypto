import React, {FC} from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import {  CoinDataShort, RootStackParams } from '../../types'
import { getDetailCoin } from '../../utils/fetching/fetching'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { commonStyles } from './styles'
import { ThemeContext } from '../../themes/ThemeContext'


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
    const {currentTheme} = React.useContext(ThemeContext)
    const styles = commonStyles(currentTheme)
    
    const {navigate} = useNavigation<SlimCoinCardNavigationProps>()

    const handlePress = async () => {  
        const data_Coin = await getDetailCoin(id)           
        navigate('Detail', data_Coin!)
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

export default SlimCoinCard