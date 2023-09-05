import React, {useContext, useState} from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { commonStyles } from "./styles"
import { ThemeContext } from "../../themes/ThemeContext"

const Header = ({handleImputText, inputText, globalData}:any ) => {
    const {currentTheme} = useContext(ThemeContext)
    const styles = commonStyles(currentTheme)     
    const handleChange = (text:string) => {
        handleImputText(text)
     
    }
    const handleClear = () => {
        handleImputText('')
    }

    globalData.market_cap
    globalData.volumen_24hs
    globalData.market_change_24hs
    return(
        <View style={styles.container}>
            <View style={styles.marketCapContainer}>
                <Text style={styles.titleMarketCap}
                >Market global capitalization</Text>
                <View style={styles.marketCapData}>
                    <Text
                        style={styles.marketCap}
                    >{`${globalData.market_cap?.toFixed(0)} U$D`}</Text>
                    {globalData.market_change_24hs !== undefined && (globalData.market_change_24hs > 0
                        ?   <Text
                                style={[styles.change, styles.green]}
                            >{`${globalData.market_change_24hs?.toFixed(2)}% 24hs`}</Text>
                        :   <Text
                        style={[styles.change, styles.red]}
                            >{`${globalData.market_change_24hs?.toFixed(2)}% 24hs`}</Text>
                    )}
            </View>
            </View>
            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.search}
                    onChangeText={text => handleChange(text)}
                    value={inputText}
                    placeholder="Search"
                    placeholderTextColor={`rgba(${currentTheme.rgbHighlight},0.5)`}   
                />
                <TouchableOpacity
                    style={styles.xButton}
                    onPress={() => handleClear()}
                >
                    <Text style={styles.xButtonText}>X</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Header