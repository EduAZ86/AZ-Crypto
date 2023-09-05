import React, { useEffect, useState} from "react"
import {  Text, View } from "react-native"
import { CoinDataDetail } from "../../types"

import { commonStyles } from "./styles"
import { ThemeContext } from "../../themes/ThemeContext"

const PriceCard: React.FC<CoinDataDetail> = ({ current_price }) => {

    const {currentTheme} = React.useContext(ThemeContext)
    const styles = commonStyles(currentTheme)


  const [previousPrice, setPreviousPrice] = useState<number | null>(null)
  const [currentPrice, setCurrentPrice] = useState<number | null>(null)
  const [priceChangePercentage, setPriceChangePercentage] = useState<number | null>(null)

  useEffect(() => {

    if (previousPrice && currentPrice) {
      const changePercentage = ((currentPrice - previousPrice) / previousPrice) * 100
      setPriceChangePercentage(changePercentage)
    }

    setPreviousPrice(currentPrice)
    if (current_price) {
        setCurrentPrice(current_price)        
    }

    return () => {
      setPreviousPrice(null)
      setCurrentPrice(null)
      setPriceChangePercentage(null)
    }
  }, [current_price])

  return (
        <View
            style={styles.container}        >

            <View
                style={styles.priceContainer}
            >
                <Text
                    style={styles.price}
                >{`${currentPrice} U$d`}</Text>
                { priceChangePercentage && (priceChangePercentage > 0
                    ?   <Text
                            style={[styles.change, styles.green]}
                        >{`⬆ ${priceChangePercentage?.toFixed(2)} %`}</Text>
                    :   <Text
                    style={[styles.change, styles.red]}
                        >{`⬇ ${priceChangePercentage?.toFixed(2)} %`}</Text>
                )}
                <Text
                    style={styles.period}
                >30s</Text>     
            </View>

        </View>
    )
}

export default PriceCard 