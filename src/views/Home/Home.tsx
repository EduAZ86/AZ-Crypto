import React,{useEffect, useState} from 'react'
import { FlatList, View } from 'react-native'
import Header from '../../components/Header/Header'
import { CoinDataShort } from '../../types'
import { getAllDataCoins } from '../../utils/fetching/fetching'

import SlimCoinCard from '../../components/SlimCoinCard/SlimCoinCard'

import { commonStyles } from './styles'
import { ThemeContext } from '../../themes/ThemeContext'

const Home = () => {

    const {currentTheme} = React.useContext(ThemeContext)
    const styles = commonStyles(currentTheme)

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

export default Home
