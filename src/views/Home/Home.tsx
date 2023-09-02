import React,{useEffect, useState} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header/Header'
import { CoinDataShort } from '../../types'
import { getAllDataCoins } from '../../utils/fetching/fetching'

import { font_color, highlight_color, primary_color, secondary_color } from '../../constants/colors'
import SlimCoinCard from '../../components/SlimCoinCard/SlimCoinCard'
const Home = () => {

    const [allCoinsDataShort, setAllCoinsDataShort] = useState<CoinDataShort[]>([])
    useEffect(() => {
        const loadDataCoins = async () =>{
            try {
                const allDataResponse = await getAllDataCoins()                                               
                setAllCoinsDataShort(allDataResponse)                
            } catch (error) {
                setAllCoinsDataShort([])
            }
        }
        if (allCoinsDataShort.length === 0) {
            loadDataCoins()
        }
        
        const intervalId = setInterval(loadDataCoins, 30000);    
    return () => {
        setAllCoinsDataShort([])
        clearInterval(intervalId);
    };
    }, [])  

    return(
        <View
            style={styles.container}
        >
            <Header/>           
            <FlatList
                data={allCoinsDataShort}
                renderItem={({ item }) => (
                    <SlimCoinCard
                        key={item.id}
                        {...item}
                    />      
                )}             
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: primary_color
    },

})

export default Home
