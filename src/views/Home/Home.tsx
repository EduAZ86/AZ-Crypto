import React,{useEffect, useState} from 'react'
import { FlatList, View } from 'react-native'
import Header from '../../components/Header/Header'
import { CoinDataShort, GlobalDataType } from '../../types'
import { getAllDataCoins, getGlobalData } from '../../utils/fetching/fetching'

import SlimCoinCard from '../../components/SlimCoinCard/SlimCoinCard'

import { commonStyles } from './styles'
import { ThemeContext } from '../../themes/ThemeContext'
const Home = () => {

    const {currentTheme} = React.useContext(ThemeContext)
    const styles = commonStyles(currentTheme)
    const [inputText, setInputText] = useState<string>('')
    const [allCoinsDataShort, setAllCoinsDataShort] = useState<CoinDataShort[]>([])
    const [resultSearch, setResultSearch] = useState<CoinDataShort[]>([])
    const [globalData, setGlobalData] = useState<GlobalDataType>({})
    const loadDataCoins = async () =>{
        try {
            const allDataResponse = await getAllDataCoins()
            const globalDataResponse = await getGlobalData()
            if (globalDataResponse) {
                setGlobalData(globalDataResponse)
            }                                               
            setAllCoinsDataShort(allDataResponse)
            if (inputText === '') {
                setResultSearch(allDataResponse) 
            }
        } catch (error) {
            setAllCoinsDataShort([])
        }
    }
    useEffect(() => { 
            loadDataCoins()

              
        const intervalId = setInterval(loadDataCoins, 30000);    
    return () => {
        setAllCoinsDataShort([])
        setResultSearch([])
        clearInterval(intervalId);
    };
    }, [])
    const handleImputText = (text:string) => {
        setInputText(text)
    }

    const onSearch = (inputText: string) => {
        if (inputText === '') {
            
            setResultSearch(allCoinsDataShort)
        } else {

            const results = allCoinsDataShort.filter((item) =>
            item.name?.toLowerCase().includes(inputText.toLowerCase()) ||
            item.symbol?.toLowerCase().includes(inputText.toLowerCase())
            )
            setResultSearch(results)
        }
        }

    useEffect(() => {
      onSearch(inputText)
    
      return () => {
        
      }
    }, [inputText])
    

    return(
        <View
            style={styles.container}
        >
            <Header
                handleImputText={handleImputText}
                inputText = {inputText}
                allCoinsDataShort={allCoinsDataShort}
                globalData={globalData}
            />           
            <FlatList             
                data={resultSearch}
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
